import { singleWordCount } from "./wordCount";

describe("single word count", () => {
  test("counts the occurrences of a word in a string where there's one of the word", () => {
    const wordToCount = "how";
    const fullSentence = "how are you";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(1);
  });

  test("counts the occurrences of a word in a string where there's multiple of the word", () => {
    const wordToCount = "what";
    const fullSentence = "what the what";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("counts the word regardless of its case", () => {
    const wordToCount = "Who";
    const fullSentence = "who the who";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("counts the occurrences regardless of sentence case", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("single question mark doesn't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who?";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("multiple question marks don't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who??";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("single exclamation mark doesn't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who!";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("multiple exclamation marks don't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who!!";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("single full stop doesn't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who.";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("multiple full stops don't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who the who..";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(2);
  });

  test("multi spaces don't affect the count", () => {
    const wordToCount = "who";
    const fullSentence = "Who    would  do something  like     that";
    const count = singleWordCount(fullSentence, wordToCount);
    expect(count).toBe(1);
  });
});
