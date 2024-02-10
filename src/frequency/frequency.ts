export const singleWordFrequency = (
  fullSentence: string,
  wordToCount: string
) => {
  const lowerCaseSearch = wordToCount.toLowerCase();

  const sentenceComponents = fullSentence.split(" ");
  const totalOccurrences = sentenceComponents.filter(
    (component) => component.toLowerCase() === lowerCaseSearch
  );

  return totalOccurrences.length;
};
