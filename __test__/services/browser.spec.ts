/**
 * @jest-environment jsdom
 */

import Browser from '../../src/services/browser';
import './mockWindow.js';

jest.mock('../../src/services/uuid', () => {
  return {
    __esModule: true,
    default: jest.fn(() => '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'),
  };
});

export const mockNavigatorGeolocation = () => {
  const clearWatchMock = jest.fn();
  const getCurrentPositionMock = jest.fn();
  const watchPositionMock = jest.fn();

  const geolocation = {
    clearWatch: clearWatchMock,
    getCurrentPosition: getCurrentPositionMock,
    watchPosxition: watchPositionMock,
  };

  Object.defineProperty(window.navigator, 'geolocation', {
    value: geolocation,
    writable: true,
  });

  return { clearWatchMock, getCurrentPositionMock, watchPositionMock };
};

describe.only('Browser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('should have get the platform of browser mac intel', async () => {
    const platform = Browser.getPlatform();
    expect(platform).toEqual('MacIntel');
  });

  it('Should have get the language en-US', async () => {
    const language = Browser.getLanguage();
    expect(language).toEqual('en-US');
  });

  it('Should have get the memory of the device of 8gb', async () => {
    // test dont have finalize
    const memory = Browser.getDeviceMemory();
    expect(memory).toEqual(8);
  });

  it('Should have get the text deviceMemory Not Found when not found deviceMemory', async () => {
    Object.defineProperty(window.navigator, 'deviceMemory', {
      writable: true,
      value: undefined,
    });

    const memory = Browser.getDeviceMemory();
    expect(memory).toEqual('deviceMemory Not Found');
  });

  it('Should have cookieEnabled true', async () => {
    const cookieEnabled = Browser.isCookieEnabled();
    expect(cookieEnabled).toEqual(true);
  });

  it('Should have cookieEnabled false', async () => {
    Object.defineProperty(window.navigator, 'cookieEnabled', {
      writable: true,
      value: false,
    });

    const cookieEnabled = Browser.isCookieEnabled();
    expect(cookieEnabled).toEqual(false);
  });

  it('Should get the name chrome of the browser', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKxit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
    });

    const browser = Browser.getBrowser();
    expect(browser).toEqual('chrome');
  });

  it('Should get the name firefox of the browser', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:89.0) Gecko/20100101 Firefox/89.0',
    });

    const browser = Browser.getBrowser();
    expect(browser).toEqual('firefox');
  });

  it('Should get the name safari of the browser', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKxit/605.1.15 (KHTML, like Gecko) Version/14.1 Safari/605.1.15',
    });

    const browser = Browser.getBrowser();
    expect(browser).toEqual('safari');
  });

  it('Should get the text Browser Not Found of the browser', async () => {
    Object.defineProperty(window.navigator, 'userAgent', {
      writable: true,
      value: '',
    });

    const browser = Browser.getBrowser();
    expect(browser).toEqual('Browser Not Found');
  });

  it('Should get the latitude = 46.3783335 and longitude = 13.8366675', async () => {
    const { getCurrentPositionMock } = mockNavigatorGeolocation();
    getCurrentPositionMock.mockImplementationOnce((success, error) =>
      Promise.resolve(
        success({
          coords: {
            latitude: 46.3783335,
            longitude: 13.8366675,
          },
        })
      )
    );
    const getPositionUser = await Browser.getPositionUser();
    expect(getPositionUser).toEqual({
      latitude: 46.3783335,
      longitude: 13.8366675,
    });
  });

  it('Should get the text User denied the request for Geolocation.', async () => {
    const { getCurrentPositionMock } = mockNavigatorGeolocation();
    getCurrentPositionMock.mockImplementationOnce((_, error) =>
      Promise.reject(error({ code: 1 })).catch((error) => {
        throw error;
      })
    );

    await expect(Browser.getPositionUser()).rejects.toEqual(
      new Error('User denied the request for Geolocation.')
    );
  });

  it('Should get the text Location information is unavailable.', async () => {
    const { getCurrentPositionMock } = mockNavigatorGeolocation();
    getCurrentPositionMock.mockImplementationOnce((_, error) =>
      Promise.reject(error({ code: 2 })).catch((error) => {
        throw error;
      })
    );

    await expect(Browser.getPositionUser()).rejects.toEqual(
      new Error('Location information is unavailable.')
    );
  });

  it('Should get the text the request to get user location timed out.', async () => {
    const { getCurrentPositionMock } = mockNavigatorGeolocation();
    getCurrentPositionMock.mockImplementationOnce((success, error) =>
      Promise.reject(error({ code: 3 }))
    );

    await expect(Browser.getPositionUser()).rejects.toEqual(
      new Error('the request to get user location timed out.')
    );
  });

  it('Should get code of error.', async () => {
    const { getCurrentPositionMock } = mockNavigatorGeolocation();
    getCurrentPositionMock.mockImplementationOnce((success, error) =>
      Promise.reject(error({ code: 6 }))
    );

    await expect(Browser.getPositionUser()).rejects.toEqual(new Error('6'));
  });

  it('Should get the fingerprint', async () => {
    const fingerprint = Browser.fingerprint();

    expect(fingerprint).toEqual({
      browser: 'Browser Not Found',
      cookieEnabled: false,
      deviceMemory: 'deviceMemory Not Found',
      language: 'en-US',
      platform: 'MacIntel',
      id: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
    });
  });
});
