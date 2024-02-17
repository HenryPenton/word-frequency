import { getSentenceComponents } from "../../utils/sentenceComponents/sentenceComponents";
import * as WordCount from "../wordCount/wordCount";

/**
 * Find frequency of a given word in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {string} word - The word to check the frequency of.
 */
export const singleFrequencyCount = (
  text: string,
  word: string,
  protectionList?: string[]
): number => {
  const wordMap = WordCount.allWordCount(text, protectionList);
  let total = 0;
  wordMap.forEach((wordCount) => (total += wordCount));

  const wordCount = wordMap.get(word);

  if (wordCount) {
    const frequency = wordCount / total;
    return Number(frequency.toFixed(4));
  }

  return 0;
};

/**
 * Count frequency of all words in a block of text.
 *
 * @param {string} text - The text to parse.
 */
export const allFrequencyCount = (
  text: string,
  protectionList?: string[]
): Map<string, number> => {
  const sentenceComponents = new Set(
    getSentenceComponents(text, protectionList)
  );

  const frequencyMap = new Map<string, number>();

  sentenceComponents.forEach((key) => {
    const single = singleFrequencyCount(text, key, protectionList);

    if (single) {
      frequencyMap.set(key, single);
    }
  });

  return frequencyMap;
};
