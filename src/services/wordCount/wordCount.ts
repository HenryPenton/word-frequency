import { punctuationRemover } from "../../utils/punctuation/punctuation";
import { getSentenceComponents } from "../../utils/sentenceComponents/sentenceComponents";

/**
 * Count instances of a given word in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {string} word - The word to count.
 */
export const singleWordCount = (text: string, word: string): number => {
  const punctuationRemovedSearch = punctuationRemover(word);

  const sentenceComponents = getSentenceComponents(text);
  const totalOccurrences = sentenceComponents.filter(
    (word) => word === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

/**
 * Count instances of all words in a block of text.
 *
 * @param {string} text - The text to parse.
 */
export const allWordCount = (text: string): Map<string, number> => {
  const uniqueSentenceComponents = new Set(getSentenceComponents(text));
  uniqueSentenceComponents.delete("");

  const wordMap = new Map<string, number>();

  uniqueSentenceComponents.forEach((word) => {
    const wordCount = singleWordCount(text, word);
    wordMap.set(word, wordCount);
  });

  return wordMap;
};
