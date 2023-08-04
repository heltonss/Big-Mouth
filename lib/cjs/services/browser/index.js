"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeolocationError = void 0;
const uuid_1 = __importDefault(require("../uuid"));
const TypeBrowser_1 = require("./TypeBrowser");
exports.GeolocationError = {
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
    code: 0,
    message: '',
};
class Browser {
    static identifyBrowser(value) {
        return navigator.userAgent.toLocaleLowerCase().includes(value);
    }
    static getPlatform() {
        return navigator.platform;
    }
    static getLanguage() {
        return navigator.language;
    }
    static getDeviceMemory() {
        const nav = window.navigator;
        return nav.deviceMemory || 'deviceMemory Not Found';
    }
    static isCookieEnabled() {
        return navigator.cookieEnabled;
    }
    static getBrowser() {
        if (this.identifyBrowser(TypeBrowser_1.TypeBrowser.CHROME)) {
            return TypeBrowser_1.TypeBrowser.CHROME;
        }
        if (this.identifyBrowser(TypeBrowser_1.TypeBrowser.FIREFOX)) {
            return TypeBrowser_1.TypeBrowser.FIREFOX;
        }
        if (this.identifyBrowser(TypeBrowser_1.TypeBrowser.SAFARI)) {
            return TypeBrowser_1.TypeBrowser.SAFARI;
        }
        return 'Browser Not Found';
    }
    static getPositionUser() {
        function showError(error) {
            switch (error.code) {
                case exports.GeolocationError.PERMISSION_DENIED:
                    throw new Error('User denied the request for Geolocation.');
                case exports.GeolocationError.POSITION_UNAVAILABLE:
                    throw new Error('Location information is unavailable.');
                case exports.GeolocationError.TIMEOUT:
                    throw new Error('the request to get user location timed out.');
                default:
                    throw new Error(`${error.code}`);
            }
        }
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition((pos) => {
                if (pos.coords) {
                    resolve(pos.coords);
                }
            }, (e) => {
                reject(showError(e));
            }, { maximumAge: 60000, timeout: 5000, enableHighAccuracy: true });
        });
    }
    static fingerprint() {
        return {
            browser: this.getBrowser(),
            language: this.getLanguage(),
            platform: this.getPlatform(),
            deviceMemory: this.getDeviceMemory(),
            cookieEnabled: this.isCookieEnabled(),
            id: (0, uuid_1.default)(),
        };
    }
}
exports.default = Browser;
