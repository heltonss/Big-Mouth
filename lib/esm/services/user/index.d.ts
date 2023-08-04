import { Fingerprint } from '../interfaces/fingerprint';
export default class User {
    static username(): string;
    static shell(): string;
    static fingerprint(): Fingerprint;
}
