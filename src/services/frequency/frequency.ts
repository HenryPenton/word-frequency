import { Settings } from "../..";
import { getUniqueSentenceComponents } from "../../utils/sentenceComponents/sentenceComponents";
import { allWordCount } from "../wordCount/wordCount";

type FrequencyMap = Map<string, number>;

/**
 * Find frequency of a given word in a block of text.
 *
 * @param {string} text - The text to parse.
 * @param {string} word - The word to check the frequency of.
 * @param {Settings} settings - Settings for the word counter
 */
export const singleFrequencyCount = (
  text: string,
  word: string,
  settings: Settings = {}
): number => {
  const wordMap = allWordCount(text, settings);
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
 * @param {Settings} settings - Settings for the word counter
 */
export const allFrequencyCount = (
  text: string,
  settings: Settings = {}
): FrequencyMap => {
  const uniqueSentenceComponents = getUniqueSentenceComponents(text, settings);

  const frequencyMap: FrequencyMap = new Map();

  uniqueSentenceComponents.forEach((uniqueSentenceComponent) => {
    const single = singleFrequencyCount(
      text,
      uniqueSentenceComponent,
      settings
    );

    frequencyMap.set(uniqueSentenceComponent, single);
  });

  return frequencyMap;
};
