const punctuationRemover = (text: string) => {
  const noQuestionMarks = text.replace(/\?/g, "");
  const noExclamationMarks = noQuestionMarks.replace(/!/g, "");
  return noExclamationMarks.replace(/\./g, "");
};

const getSentenceComponents = (text: string) => text.split(" ");

export const singleWordCount = (fullSentence: string, wordToCount: string) => {
  const lowerCaseSearch = wordToCount.toLowerCase();
  const punctuationRemovedSearch = punctuationRemover(lowerCaseSearch);

  const lowerCaseSentence = fullSentence.toLowerCase();
  const punctuationRemovedText = punctuationRemover(lowerCaseSentence);

  const sentenceComponents = getSentenceComponents(punctuationRemovedText);

  const totalOccurrences = sentenceComponents.filter(
    (component) => component === punctuationRemovedSearch
  );

  return totalOccurrences.length;
};

export const allWordCount = (fullSentence: string) => {
  const sentenceComponents = getSentenceComponents(fullSentence);
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
