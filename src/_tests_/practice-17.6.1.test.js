import { revertString } from "../practice-17.6.1.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});
