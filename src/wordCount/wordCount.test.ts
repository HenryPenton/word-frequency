import * as WordCount from "./wordCount";

describe("word count", () => {
  describe("single word count", () => {
    test("counts the occurrences of a word in a string where there's one of the word", () => {
      const wordToCount = "how";
      const fullSentence = "how are you";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(1);
    });

    test("counts the occurrences of a word in a string where there's multiple of the word", () => {
      const wordToCount = "what";
      const fullSentence = "what the what";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("counts the word regardless of its case", () => {
      const wordToCount = "Who";
      const fullSentence = "who the who";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("counts the occurrences regardless of sentence case", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });
  });

  describe("all word count", () => {
    test("counts the number of every word in a string for a one word string", () => {
      const fullSentence = "how";
      const countMap = WordCount.allWordCount(fullSentence);

      const expectedCountMap = new Map<string, number>();
      expectedCountMap.set("how", 1);

      expect(countMap).toEqual(expectedCountMap);
    });

    test("counts the number of every word in a string for a two word string where the words are different", () => {
      const fullSentence = "how do";
      const countMap = WordCount.allWordCount(fullSentence);

      const expectedCountMap = new Map<string, number>();
      expectedCountMap.set("how", 1).set("do", 1);

      expect(countMap).toEqual(expectedCountMap);
    });

    test("counts the frequency of every word in a string for a three word string where two of the words are the same", () => {
      const fullSentence = "how do how";
      const countMap = WordCount.allWordCount(fullSentence);

      const expectedCountMap = new Map<string, number>();
      expectedCountMap.set("how", 2).set("do", 1);

      expect(countMap).toEqual(expectedCountMap);
    });

    test("doesn't re-count the same word twice", () => {
      const mockSingleWordCount = jest.fn(() => 2);

      jest
        .spyOn(WordCount, "singleWordCount")
        .mockImplementation(mockSingleWordCount);

      const fullSentence = "how how";
      WordCount.allWordCount(fullSentence);

      expect(mockSingleWordCount).toHaveBeenCalledTimes(1);
    });
  });

  describe("punctuation", () => {
    test("single question mark doesn't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who?";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("multiple question marks don't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who??";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("single exclamation mark doesn't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who!";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("multiple exclamation marks don't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who!!";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("single full stop doesn't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who.";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("multiple full stops don't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who the who..";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("punctuation can come in the middle of the sentence", () => {
      const wordToCount = "who";
      const fullSentence = "Who? the who..";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("punctuation doesn't affect the search", () => {
      const wordToCount = "who?";
      const fullSentence = "Who the who..";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(2);
    });

    test("multi spaces don't affect the count", () => {
      const wordToCount = "who";
      const fullSentence = "Who    would  do something  like     that";
      const count = WordCount.singleWordCount(fullSentence, wordToCount);
      expect(count).toBe(1);
    });
  });

  describe("misc", () => {
    test("spaces aren't counted", () => {
      const fullSentence = "Who   the   who?";
      const countMap = WordCount.allWordCount(fullSentence);

      expect(countMap.get("")).toBeUndefined();
    });
  });
});
