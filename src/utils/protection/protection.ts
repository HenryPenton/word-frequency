import { generateRandomStrings } from "../randomStringGenerator/generator";

export type PreservationMap = Map<string, string>;

export const buildPreservationMap = (
  preservedWords: string[],
  preservationMap: PreservationMap
): PreservationMap => {
  const randomStrings = generateRandomStrings(preservedWords.length);
  preservedWords.forEach((preservedWord, index) => {
    preservationMap.set(preservedWord, `${randomStrings[index]}`);
  });

  return preservationMap;
};

export const addWordProtection = (
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

export const removeWordProtection = (
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
