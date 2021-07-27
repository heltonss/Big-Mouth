"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = __importDefault(require("../uuid"));
var TypeBrowser;
(function (TypeBrowser) {
    TypeBrowser["CHROME"] = "chrome";
    TypeBrowser["FIREFOX"] = "firefox";
    TypeBrowser["SAFARI"] = "safari";
})(TypeBrowser || (TypeBrowser = {}));
const GeolocationError = {
    PERMISSION_DENIED: 1,
    POSITION_UNAVAILABLE: 2,
    TIMEOUT: 3,
    code: 0,
    message: "",
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
        return nav.deviceMemory || "deviceMemory Not Found";
    }
    static isCookieEnabled() {
        return navigator.cookieEnabled;
    }
    static getBrowser() {
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
        function showError(error) {
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
            navigator.geolocation.getCurrentPosition((pos) => {
                resolve(pos.coords);
            }, (e) => {
                reject(showError(e));
            });
        });
    }
    static fingerprint() {
        return {
            browser: this.getBrowser(),
            language: this.getLanguage(),
            platform: this.getPlatform(),
            deviceMemory: this.getDeviceMemory(),
            cookieEnabled: this.isCookieEnabled(),
            id: uuid_1.default(),
        };
    }
}
exports.default = Browser;
//# sourceMappingURL=index.js.map