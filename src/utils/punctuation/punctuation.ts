import { generateRandomStrings } from "../randomStringGenerator/generator";

type PreservationMap = Map<string, string>;

const buildPreservationMap = (
  preservedWords: string[],
  preservationMap: PreservationMap
): PreservationMap => {
  const randomStrings = generateRandomStrings(preservedWords.length);
  preservedWords.forEach((preservedWord, index) => {
    preservationMap.set(preservedWord, `${randomStrings[index]}`);
  });

  return preservationMap;
};
const removePunctuation = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\//g, " ")
    .replace(/[\r\n]+/gm, " ")
    .replace(/[^\w\s]/g, "");

const addWordProtection = (
  preservationMap: PreservationMap,
  text: string
): string => {
  let protectedString = text;
  preservationMap.forEach((preservedWordRandomized, originalWord) => {
    const myRegex = new RegExp(originalWord, "g");
    protectedString = protectedString.replace(myRegex, preservedWordRandomized);
  });

  return protectedString;
};

const removeWordProtection = (
  preservationMap: PreservationMap,
  text: string
): string => {
  let unprotectedString = text;
  preservationMap?.forEach((preservedWordRandomized, originalWord) => {
    const myRegex = new RegExp(preservedWordRandomized, "g");

    unprotectedString = unprotectedString.replace(myRegex, originalWord);
  });
  return unprotectedString;
};

export const punctuationRemover = (
  text: string,
  preservedWords?: string[]
): string => {
  let content = text;
  const preservationMap: PreservationMap = new Map();

  if (preservedWords) {
    buildPreservationMap(preservedWords, preservationMap);
    content = addWordProtection(preservationMap, content);
  }

  content = removePunctuation(content);

  content = removeWordProtection(preservationMap, content);

  return content;
};
