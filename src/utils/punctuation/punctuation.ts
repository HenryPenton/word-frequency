import { generateRandomStrings } from "../randomStringGenerator/generator";

export const punctuationRemover = (
  text: string,
  preservedWords?: string[]
): string => {
  let preservedString = text.toLowerCase();
  const preservationMap: Map<string, string> = new Map();

  if (preservedWords) {
    const randomStrings = generateRandomStrings(preservedWords.length);
    preservedWords.forEach((preservedWord, index) => {
      preservationMap.set(preservedWord, `${randomStrings[index]}`);
    });

    preservationMap.forEach((preservedWordRandomized, originalWord) => {
      const myRegex = new RegExp(originalWord, "g");
      preservedString = preservedString.replace(
        myRegex,
        preservedWordRandomized
      );
    });
  }

  preservedString = preservedString
    .replace(/\//g, " ")
    .replace(/[\r\n]+/gm, " ")
    .replace(/[^\w\s]/g, "");

  preservationMap.forEach((preservedWordRandomized, originalWord) => {
    const myRegex = new RegExp(preservedWordRandomized, "g");

    preservedString = preservedString.replace(myRegex, originalWord);
  });

  return preservedString;
};
