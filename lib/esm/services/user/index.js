import * as os from 'os';
import uuid from '../uuid';
export default class User {
    static username() {
        const username = os.userInfo().username || 'user not found';
        return username;
    }
    static shell() {
        return os.userInfo().shell;
    }
    static fingerprint() {
        return {
            name: this.username(),
            shell: this.shell(),
            id: uuid(),
        };
    }
}
