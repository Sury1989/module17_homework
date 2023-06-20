import { repeatWord } from "../practice-17.6.2.js";

describe("repeatWord", () => {
  it("counter positive number", () => {
    expect(repeatWord("word", 3)).toBe("word1, word2, word3");
  });
  it("counter is not a number", () => {
    expect(repeatWord("word", "line")).toBe("error");
  });
  it("counter is zero", () => {
    expect(repeatWord("word", 0)).toBe("error");
  });
  it("counter negative number", () => {
    expect(repeatWord("word", -3)).toBe("error");
  });
});
