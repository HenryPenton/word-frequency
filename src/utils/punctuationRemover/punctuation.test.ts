import { punctuationRemover } from "./punctuation";

describe("punctuation", () => {
  test("single question marks removed", () => {
    const fullSentence = "Who the who?";
    const noPunctuationSentence = punctuationRemover(fullSentence);
    expect(noPunctuationSentence).toBe("who the who");
  });

  test("multiple question marks removed", () => {
    const fullSentence = "Who the who??";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("single exclamation marks are removed", () => {
    const fullSentence = "Who the who!";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("multiple exclamation marks don't affect the count", () => {
    const fullSentence = "Who the who!!";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("single full stop doesn't affect the count", () => {
    const fullSentence = "Who the who.";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("multiple full stops don't affect the count", () => {
    const fullSentence = "Who the who..";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("punctuation can come in the middle of the sentence", () => {
    const fullSentence = "Who? the who..";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });

  test("capitals are removed", () => {
    const fullSentence = "Who the who";
    const noPunctuationSentence = punctuationRemover(fullSentence);

    expect(noPunctuationSentence).toBe("who the who");
  });
});
