import Browser from "../services/browser/index";
import User from "../services/user/index";
import Os from "../services/os/index";
export default {
    user: {
        name: User.username(),
        shell: User.shell(),
    },
    os: {
        nameOS: Os.getNameOS(),
        releaseOS: Os.getReleaseOS(),
        quantityMemory: Os.getQuantityMemory(),
        cpus: Os.getCpus(),
    },
    browser: {
        deviceMemory: Browser.getDeviceMemory(),
        nameBrowser: Browser.getBrowser(),
        platform: Browser.getPlatform(),
        language: Browser.getLanguage(),
        getPositionLatLong: Browser.getPositionUser(),
    },
};
//# sourceMappingURL=index.js.map