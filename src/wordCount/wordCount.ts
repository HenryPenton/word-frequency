const punctuationRemover = (text: string) => {
  const noQuestionMarks = text.replace(/\?/g, "");
  const noExclamationMarks = noQuestionMarks.replace(/!/g, "");
  return noExclamationMarks.replace(/\./g, "");
};

const getSentenceComponents = (text: string) => text.split(" ");

/**
 * Count instances of a given word in a sentence.
 *
 * @param {string} fullSentence - The sentence to parse.
 * @param {string} wordToCount - The word to count.
 */
export const singleWordCount = (fullSentence: string, wordToCount: string) => {
  const lowerCaseSearch = wordToCount.toLowerCase();
  const lowerCaseSentence = fullSentence.toLowerCase();

  const punctuationRemovedSearch = punctuationRemover(lowerCaseSearch);
  const punctuationRemovedText = punctuationRemover(lowerCaseSentence);

  const sentenceComponents = getSentenceComponents(punctuationRemovedText);
  const totalOccurrences = sentenceComponents.filter(
    (word) => word === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

/**
 * Count instances of all words in a sentence.
 *
 * @param {string} fullSentence - The sentence to parse.
 */
export const allWordCount = (fullSentence: string) => {
  const noPunctuationSentence = punctuationRemover(fullSentence.toLowerCase());
  const uniqueSentenceComponents = new Set(
    getSentenceComponents(noPunctuationSentence)
  );
  uniqueSentenceComponents.delete("");

  const wordMap = new Map<string, number>();

  uniqueSentenceComponents.forEach((word) => {
    const wordCount = singleWordCount(fullSentence, word);
    wordMap.set(word, wordCount);
  });

  return wordMap;
};
