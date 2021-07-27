import * as bigmouth from "../src/index";

describe("Entry point", () => {
  it("Should have a object of entrypoint", () => {
    expect(bigmouth.hasOwnProperty("Browser")).toBeTruthy();
    expect(bigmouth.hasOwnProperty("User")).toBeTruthy();
    expect(bigmouth.hasOwnProperty("OperationSystem")).toBeTruthy();
  });
});
