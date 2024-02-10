import { singleWordFrequency } from "./frequency";
describe("single word frequency", () => {
  test("counts the frequency of a word in a string where there's a single occurrence", () => {
    const wordToCount = "how";
    const fullSentence = "how are you";
    const count = singleWordFrequency(fullSentence, wordToCount);
    expect(count).toBe(1);
  });
});
