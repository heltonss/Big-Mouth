import OperationSystem from "../../src/services/os";

jest.mock("os");
jest.mock("../../src/services/uuid", () => {
  return {
    __esModule: true,
    default: jest.fn(() => "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"),
  };
});

const cpus = [
  {
    model: "Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz",
    speed: 2300,
    times: { user: 2898940, nice: 0, sys: 1578120, idle: 15709950, irq: 0 },
  },
  {
    model: "Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz",
    speed: 2300,
    times: { user: 708390, nice: 0, sys: 400600, idle: 19074910, irq: 0 },
  },
  {
    model: "Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz",
    speed: 2300,
    times: { user: 2851870, nice: 0, sys: 1160650, idle: 16171380, irq: 0 },
  },
  {
    model: "Intel(R) Core(TM) i5-7360U CPU @ 2.30GHz",
    speed: 2300,
    times: { user: 630780, nice: 0, sys: 322510, idle: 19230600, irq: 0 },
  },
];

describe("Operation System", () => {
  it("should get the name of system operation Mac OS", () => {
    const getNameOS = OperationSystem.getNameOS();
    expect(getNameOS).toEqual("Mac OS");
  });

  it("should get the name of system operation Windows", () => {
    const getNameOS = OperationSystem.getNameOS();
    expect(getNameOS).toEqual("Windows");
  });

  it("should get the name of system operation Linux", () => {
    const getNameOS = OperationSystem.getNameOS();
    expect(getNameOS).toEqual("linux");
  });

  it("should get the name of system operation xzybt", () => {
    const getNameOS = OperationSystem.getNameOS();
    expect(getNameOS).toEqual("xzybt");
  });

  it("Should get the number of the realease 19.6.0", () => {
    const getRelease = OperationSystem.getReleaseOS();
    expect(getRelease).toEqual("19.6.0");
  });

  it("Should get the quantity of memory 8589934592", () => {
    const getMemory = OperationSystem.getQuantityMemory();
    expect(getMemory).toEqual(8589934592);
  });

  it("Should get the infos of the cpu's", () => {
    const getCpus = OperationSystem.getCpus();
    expect(getCpus).toEqual(cpus);
  });

  it("Should get the fingerprint", () => {
    const fingerprint = OperationSystem.fingerprint();

    expect(fingerprint).toEqual({
      nameos: "Mac OS",
      release: "19.6.0",
      totalmem: 8589934592,
      cpus: cpus,
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    });
  });
});
