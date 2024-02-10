export const singleWordCount = (fullSentence: string, wordToCount: string) => {
  const lowerCaseSearch = wordToCount.toLowerCase();
  const noQuestionMarks = fullSentence.replace(/\?/g, "");
  const noExclamationMarks = noQuestionMarks.replace(/!/g, "");
  const noFullStops = noExclamationMarks.replace(/\./g, "");

  const sentenceComponents = noFullStops.split(" ");
  console.log(sentenceComponents);
  const totalOccurrences = sentenceComponents.filter(
    (component) => component.toLowerCase() === lowerCaseSearch
  );

  return totalOccurrences.length;
};

export const allWordCount = (fullSentence: string) => {
  const sentenceComponents = fullSentence.split(" ");

  const map = new Map<string, number>();

  sentenceComponents.forEach((word) => {
    const wordCount = singleWordCount(fullSentence, word);

    map.set(word, wordCount);
  });

  return map;
};