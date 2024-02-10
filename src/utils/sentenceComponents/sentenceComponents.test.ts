import { getSentenceComponents } from "./sentenceComponents";

describe("sentence components", () => {
  test("splits sentence of one word", () => {
    const sentenceComponents = getSentenceComponents("xyz");
    expect(sentenceComponents).toEqual(["xyz"]);
  });

  test("splits sentence of two words", () => {
    const sentenceComponents = getSentenceComponents("xyz abc");
    expect(sentenceComponents).toEqual(["xyz", "abc"]);
  });

  test("splits sentence of five words", () => {
    const sentenceComponents = getSentenceComponents("the big brown fat cat");
    expect(sentenceComponents).toEqual(["the", "big", "brown", "fat", "cat"]);
  });
});
