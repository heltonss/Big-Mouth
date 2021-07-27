import User from "../../src/services/user";

jest.mock("os");

jest.mock("../../src/services/uuid", () => {
  return {
    __esModule: true,
    default: jest.fn(() => "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"),
  };
});

describe("User", () => {
  it("should get username macau", () => {
    const user = User.username();

    expect(user).toEqual("macau");
  });

  it("should get a fingerprint", () => {
    const shell = User.fingerprint();

    expect(shell).toEqual({
      name: "macau",
      shell: "/bin/zsh",
      id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    });
  });

  it("should get user not found ", () => {
    const user = User.username();

    expect(user).toEqual("user not found");
  });

  it("should get username macau", () => {
    const shell = User.shell();

    expect(shell).toEqual("/bin/zsh");
  });
});
