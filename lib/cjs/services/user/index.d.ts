import { IFingerprint } from "../interfaces/IFingerprint";
export default class User {
    static username(): string;
    static shell(): string;
    static fingerprint(): IFingerprint;
}
