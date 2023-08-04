/* eslint-disable require-jsdoc */
import * as os from 'os';
import { Fingerprint } from '../interfaces/fingerprint';
import uuid from '../uuid';

export default class User {
  static username(): string {
    const username = os.userInfo().username || 'user not found';
    return username;
  }
  static shell(): string {
    return os.userInfo().shell;
  }

  static fingerprint(): Fingerprint {
    return {
      name: this.username(),
      shell: this.shell(),
      id: uuid(),
    };
  }
}
