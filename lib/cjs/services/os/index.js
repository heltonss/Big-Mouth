"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const os = __importStar(require("os"));
const uuid_1 = __importDefault(require("../uuid"));
class OperationSystem {
    static getNameOperationSystem(platform) {
        switch (platform) {
            case "darwin":
                return "Mac OS";
            case "win32":
                return "Windows";
            case "linux":
                return "linux";
            default:
                return platform;
        }
    }
    static getNameOS() {
        return OperationSystem.getNameOperationSystem(os.platform());
    }
    static getReleaseOS() {
        return os.release();
    }
    static getQuantityMemory() {
        return os.totalmem();
    }
    static getCpus() {
        return os.cpus();
    }
    static fingerprint() {
        return {
            nameos: this.getNameOS(),
            release: this.getReleaseOS(),
            totalmem: this.getQuantityMemory(),
            cpus: this.getCpus(),
            id: uuid_1.default(),
        };
    }
}
exports.default = OperationSystem;
//# sourceMappingURL=index.js.map