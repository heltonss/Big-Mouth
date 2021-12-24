import * as os from "os";
import uuid from "../uuid";
export default class OperationSystem {
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
            id: uuid(),
        };
    }
}
//# sourceMappingURL=index.js.map