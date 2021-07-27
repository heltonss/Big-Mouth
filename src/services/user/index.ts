import * as os from "os";
import { IFingerprint } from "../interfaces/IFingerprint";
import uuid from "../uuid";

export default class User {
  static username(): string {
    const username = os.userInfo().username || "user not found";
    return username;
  }
  static shell(): string {
    return os.userInfo().shell;
  }

  static fingerprint(): IFingerprint {
    return {
      name: this.username(),
      shell: this.shell(),
      id: uuid(),
    };
  }
}
