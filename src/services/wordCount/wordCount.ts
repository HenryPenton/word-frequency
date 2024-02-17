import { Settings } from "../..";
import { punctuationRemover } from "../../utils/punctuation/punctuation";
import { getSentenceComponents } from "../../utils/sentenceComponents/sentenceComponents";

/**
 * Count instances of a given word in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {string} word - The word to count.
 * @param {Settings} settings - Settings for the word counter
 */
export const singleWordCount = (
  text: string,
  word: string,
  settings: Settings = {}
): number => {
  const punctuationRemovedSearch = punctuationRemover(word, settings);
  const sentenceComponents = getSentenceComponents(text, settings);

  const totalOccurrences = sentenceComponents.filter(
    (word) => word === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

/**
 * Count instances of all words in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {Settings} settings - Settings for the word counter
 */
export const allWordCount = (
  text: string,
  settings: Settings = {}
): Map<string, number> => {
  const uniqueSentenceComponents = new Set(
    getSentenceComponents(text, settings)
  );

  const wordMap = new Map<string, number>();

  uniqueSentenceComponents.forEach((word) => {
    const wordCount = singleWordCount(text, word, settings);
    wordMap.set(word, wordCount);
  });

  return wordMap;
};
