import { punctuationRemover } from "./punctuation";

describe("punctuation", () => {
  test("single question marks removed from the sentence", () => {
    const fullSentence = "Who the who?";
    const noPunctuationSentence = punctuationRemover(fullSentence);
    expect(noPunctuationSentence).toBe("who the who");
  });

  test("multiple question marks removed from the sentence", () => {
    const fullSentence = "Who the who??";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("single exclamation marks are removed from the sentence", () => {
    const fullSentence = "Who the who!";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("multiple exclamation marks removed from the sentence", () => {
    const fullSentence = "Who the who!!";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("single full stop removed from the sentence", () => {
    const fullSentence = "Who the who.";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("multiple full stops removed from the sentence", () => {
    const fullSentence = "Who the who..";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("punctuation can come in the middle of the sentence", () => {
    const fullSentence = "Who? the who..";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("capitals are removed from the sentence", () => {
    const fullSentence = "Who the who";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });
});
