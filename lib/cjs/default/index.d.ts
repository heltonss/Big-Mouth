declare const _default: {
    user: {
        name: string;
        shell: string;
    };
    os: {
        nameOS: string;
        releaseOS: string;
        quantityMemory: number;
        cpus: import("../services/os/index").CpuInfo[];
    };
    browser: {
        deviceMemory: string | number;
        nameBrowser: string;
        platform: string;
        language: string;
        getPositionLatLong: Promise<unknown>;
    };
};
export default _default;
