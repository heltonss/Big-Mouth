import { Fingerprint } from '../interfaces/fingerprint';
export declare const GeolocationError: GeolocationPositionError;
export default class Browser {
    private static identifyBrowser;
    static getPlatform(): string;
    static getLanguage(): string;
    static getDeviceMemory(): number | string;
    static isCookieEnabled(): boolean;
    static getBrowser(): string;
    static getPositionUser(): Promise<unknown>;
    static fingerprint(): Fingerprint;
}
