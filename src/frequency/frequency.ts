export const singleWordFrequency = (
  fullSentence: string,
  wordToCount: string
) => {
  const lowerCaseSearch = wordToCount.toLowerCase();
  const noQuestionMarks = fullSentence.replace(/\?/g, "");
  const noExclamationMarks = noQuestionMarks.replace(/!/g, "");
  const sentenceComponents = noExclamationMarks.split(" ");
  const totalOccurrences = sentenceComponents.filter(
    (component) => component.toLowerCase() === lowerCaseSearch
  );

  return totalOccurrences.length;
};
