import { getSentenceComponents } from "../utils/sentenceComponents/sentenceComponents";
import * as WordCount from "../wordCount/wordCount";

export const singleFrequencyCount = (sentence: string, word: string) => {
  const wordMap = WordCount.allWordCount(sentence);
  let total = 0;
  wordMap.forEach((wordCount) => (total += wordCount));

  const wordCount = wordMap.get(word);

  if (wordCount) {
    const frequency = wordCount / total;
    return Number(frequency.toFixed(4));
  }
};
export const allFrequencyCount = (sentence: string) => {
  const sentenceComponents = getSentenceComponents(sentence);

  const frequencyMap = new Map<string, number>();
  sentenceComponents.forEach((key) => {
    const single = singleFrequencyCount(sentence, key);

    if (single) {
      frequencyMap.set(key, single);
    }
  });

  return frequencyMap;
};
