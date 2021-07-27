import uuid from "../../src/services/uuid";

describe("UUID", () => {
  it("should get id uuid", () => {
    expect(uuid()).toBeDefined();
  });
});
