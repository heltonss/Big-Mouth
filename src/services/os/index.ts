import { IFingerprint } from "../interfaces/IFingerprint";
import * as os from "os";
import uuid from "../uuid";

export interface CpuInfo {
  model: string;
  speed: number;
  times: {
    user: number;
    nice: number;
    sys: number;
    idle: number;
    irq: number;
  };
}

export default class OperationSystem {
  private static getNameOperationSystem(platform: string) {
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

  static getNameOS(): string {
    return OperationSystem.getNameOperationSystem(os.platform());
  }

  static getReleaseOS(): string {
    return os.release();
  }

  static getQuantityMemory(): number {
    return os.totalmem();
  }

  static getCpus(): CpuInfo[] {
    return os.cpus();
  }

  static fingerprint(): IFingerprint {
    return {
      nameos: this.getNameOS(),
      release: this.getReleaseOS(),
      totalmem: this.getQuantityMemory(),
      cpus: this.getCpus(),
      id: uuid(),
    };
  }
}
