import { generateRandomStrings } from "../randomStringGenerator/generator";

export type ProtectionMap = Map<string, string>;
export class Protection {
  private protectionMap: ProtectionMap;

  constructor(preservedWords: string[]) {
    this.protectionMap = this.buildProtectionMap(preservedWords);
  }

  buildProtectionMap = (preservedWords: string[]): ProtectionMap => {
    const protectionMap: ProtectionMap = new Map();
    const randomStrings = generateRandomStrings(preservedWords.length);
    preservedWords.forEach((preservedWord, index) => {
      protectionMap.set(preservedWord, `${randomStrings[index]}`);
    });

    return protectionMap;
  };

  addWordProtection = (text: string): string => {
    let protectedString = text;
    this.protectionMap.forEach((preservedWordRandomized, originalWord) => {
      const originalWordMatcher = new RegExp(originalWord, "g");
      protectedString = protectedString.replace(
        originalWordMatcher,
        preservedWordRandomized
      );
    });

    return protectedString;
  };

  removeWordProtection = (text: string): string => {
    let unprotectedString = text;
    this.protectionMap.forEach((preservedWordRandomized, originalWord) => {
      const protectedWordMatcher = new RegExp(preservedWordRandomized, "g");

      unprotectedString = unprotectedString.replace(
        protectedWordMatcher,
        originalWord
      );
    });
    return unprotectedString;
  };
}
