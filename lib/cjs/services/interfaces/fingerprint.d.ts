import { CpuInfo } from '../os';
export interface Fingerprint {
    browser?: string;
    deviceMemory?: number | string;
    cookieEnabled?: boolean;
    language?: string;
    platform?: string;
    name?: string;
    shell?: string;
    nameos?: string;
    release?: string;
    totalmem?: number;
    cpus?: CpuInfo[];
    id?: string;
}
