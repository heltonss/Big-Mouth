import { IFingerprint } from "../interfaces/IFingerprint";
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
    private static getNameOperationSystem;
    static getNameOS(): string;
    static getReleaseOS(): string;
    static getQuantityMemory(): number;
    static getCpus(): CpuInfo[];
    static fingerprint(): IFingerprint;
}
