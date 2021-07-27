"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../services/browser/index"));
const index_2 = __importDefault(require("../services/user/index"));
const index_3 = __importDefault(require("../services/os/index"));
exports.default = {
    user: {
        name: index_2.default.username(),
        shell: index_2.default.shell(),
    },
    os: {
        nameOS: index_3.default.getNameOS(),
        releaseOS: index_3.default.getReleaseOS(),
        quantityMemory: index_3.default.getQuantityMemory(),
        cpus: index_3.default.getCpus(),
    },
    browser: {
        deviceMemory: index_1.default.getDeviceMemory(),
        nameBrowser: index_1.default.getBrowser(),
        platform: index_1.default.getPlatform(),
        language: index_1.default.getLanguage(),
        getPositionLatLong: index_1.default.getPositionUser(),
    },
};
//# sourceMappingURL=index.js.map