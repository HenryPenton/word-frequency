import { punctuationRemover } from "../../utils/punctuation/punctuation";
import { getSentenceComponents } from "../../utils/sentenceComponents/sentenceComponents";

/**
 * Count instances of a given word in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {string} word - The word to count.
 * @param {string} protectionList - Words or phases that should be counted as is (punctuation is not removed).
 */
export const singleWordCount = (
  text: string,
  word: string,
  protectionList?: string[]
): number => {
  const punctuationRemovedSearch = punctuationRemover(word, protectionList);
  const sentenceComponents = getSentenceComponents(text, protectionList);

  const totalOccurrences = sentenceComponents.filter(
    (word) => word === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

/**
 * Count instances of all words in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {string} protectionList - Words or phases that should be counted as is (punctuation is not removed).
 */
export const allWordCount = (
  text: string,
  protectionList?: string[]
): Map<string, number> => {
  const uniqueSentenceComponents = new Set(
    getSentenceComponents(text, protectionList)
  );
  uniqueSentenceComponents.delete("");

  const wordMap = new Map<string, number>();

  uniqueSentenceComponents.forEach((word) => {
    const wordCount = singleWordCount(text, word, protectionList);
    wordMap.set(word, wordCount);
  });

  return wordMap;
};
