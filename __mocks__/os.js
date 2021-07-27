const os = jest.createMockFromModule("os");

let count = 0;

function platform() {
  return jest
    .fn()
    .mockReturnValueOnce("darwin")
    .mockReturnValueOnce("win32")
    .mockReturnValueOnce("linux")
    .mockReturnValueOnce("xzybt")
    .mockReturnValueOnce("darwin");
}

function release() {
  return "19.6.0";
}

function totalmem() {
  return 8589934592;
}

function cpus() {
  return [
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
}

function userInfo() {
  const values = count < 3 ? "macau" : undefined;
  count++;
  return {
    username: values,
    shell: "/bin/zsh",
  };
}

os.platform = platform();
os.release = release;
os.totalmem = totalmem;
os.cpus = cpus;
os.userInfo = userInfo;

module.exports = os;
