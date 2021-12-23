import { IFingerprint } from "../interfaces/IFingerprint";
import uuid from "../uuid";

enum TypeBrowser {
  CHROME = "chrome",
  FIREFOX = "firefox",
  SAFARI = "safari",
}

const GeolocationError: GeolocationPositionError = {
  PERMISSION_DENIED: 1,
  POSITION_UNAVAILABLE: 2,
  TIMEOUT: 3,
  code: 0,
  message: '',
};

export default class Browser {
  private static identifyBrowser(value: TypeBrowser): boolean {
    return navigator.userAgent.toLocaleLowerCase().includes(value);
  }

  static getPlatform(): string {
    return navigator.platform;
  }

  static getLanguage(): string {
    return navigator.language;
  }

  static getDeviceMemory(): number | string {
    const nav: any = window.navigator;
    return nav.deviceMemory || "deviceMemory Not Found";
  }

  static isCookieEnabled(): boolean {
    return navigator.cookieEnabled;
  }

  static getBrowser(): string {
    if (this.identifyBrowser(TypeBrowser.CHROME)) {
      return TypeBrowser.CHROME;
    }

    if (this.identifyBrowser(TypeBrowser.FIREFOX)) {
      return TypeBrowser.FIREFOX;
    }

    if (this.identifyBrowser(TypeBrowser.SAFARI)) {
      return TypeBrowser.SAFARI;
    }

    return "Browser Not Found";
  }

  static getPositionUser() {
    function showError(error: GeolocationPositionError) {
      switch (error.code) {
        case GeolocationError.PERMISSION_DENIED:
          return "User denied the request for Geolocation.";
        case GeolocationError.POSITION_UNAVAILABLE:
          return "Location information is unavailable.";
        case GeolocationError.TIMEOUT:
          return "the request to get user location timed out.";
        default:
          return `error: ${error.code}`;
      }
    }

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          resolve(pos.coords);
        },
        (e: GeolocationPositionError) => {
          reject(showError(e));
        }
      );
    });
  }

  static fingerprint(): IFingerprint {
    return {
      browser: this.getBrowser(),
      language: this.getLanguage(),
      platform: this.getPlatform(),
      deviceMemory: this.getDeviceMemory(),
      cookieEnabled: this.isCookieEnabled(),
      id: uuid(),
    };
  }
}
