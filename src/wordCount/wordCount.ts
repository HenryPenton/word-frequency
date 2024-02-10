const punctuationRemover = (text: string) => {
  const noQuestionMarks = text.replace(/\?/g, "");
  const noExclamationMarks = noQuestionMarks.replace(/!/g, "");
  return noExclamationMarks.replace(/\./g, "");
};

export const singleWordCount = (fullSentence: string, wordToCount: string) => {
  const lowerCaseSearch = wordToCount.toLowerCase();
  const punctuationRemovedSearch = punctuationRemover(lowerCaseSearch);

  const punctuationRemovedText = punctuationRemover(fullSentence);
  const sentenceComponents = punctuationRemovedText.split(" ");

  const totalOccurrences = sentenceComponents.filter(
    (component) => component.toLowerCase() === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

export const allWordCount = (fullSentence: string) => {
  const sentenceComponents = fullSentence.split(" ");
  const wordMap = new Map<string, number>();

  for (let index = 0; index < sentenceComponents.length; index++) {
    const word = sentenceComponents[index];
    if (word === "") break;

    const mapEntry = wordMap.get(word);
    const shouldCountWord = !mapEntry;

    if (shouldCountWord) {
      const wordCount = singleWordCount(fullSentence, word);

      wordMap.set(word, wordCount);
    }
  }

  return wordMap;
};
