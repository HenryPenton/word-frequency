const punctuationRemover = (text: string) => {
  const noQuestionMarks = text.replace(/\?/g, "");
  const noExclamationMarks = noQuestionMarks.replace(/!/g, "");
  return noExclamationMarks.replace(/\./g, "");
};

const getSentenceComponents = (text: string) => text.split(" ");

export const singleWordCount = (fullSentence: string, wordToCount: string) => {
  const lowerCaseSearch = wordToCount.toLowerCase();
  const lowerCaseSentence = fullSentence.toLowerCase();

  const punctuationRemovedSearch = punctuationRemover(lowerCaseSearch);
  const punctuationRemovedText = punctuationRemover(lowerCaseSentence);

  const sentenceComponents = getSentenceComponents(punctuationRemovedText);
  const totalOccurrences = sentenceComponents.filter(
    (component) => component === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

export const allWordCount = (fullSentence: string) => {
  const uniqueSentenceComponents = [
    ...new Set(getSentenceComponents(fullSentence)),
  ];

  const wordMap = new Map<string, number>();

  for (let index = 0; index < uniqueSentenceComponents.length; index++) {
    const word = uniqueSentenceComponents[index];
    if (word === "") break;

    const wordCount = singleWordCount(fullSentence, word);
    wordMap.set(word, wordCount);
  }

  return wordMap;
};
