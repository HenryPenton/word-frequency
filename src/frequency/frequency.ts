export const singleWordFrequency = (
  fullSentence: string,
  wordToCount: string
) => {
  const sentenceComponents = fullSentence.split(" ");
  const totalOccurrences = sentenceComponents.filter(
    (component) => component === wordToCount
  );

  return totalOccurrences.length;
};
