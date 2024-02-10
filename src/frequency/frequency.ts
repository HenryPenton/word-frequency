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
