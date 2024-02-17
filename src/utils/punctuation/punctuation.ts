import { Protection } from "../protection/protection";

const removePunctuation = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\//g, " ")
    .replace(/[\r\n]+/gm, " ")
    .replace(/[^\w\s]/g, "");

export const punctuationRemover = (
  text: string,
  preservedWords?: string[]
): string => {
  let content = text;
  const protection = new Protection(preservedWords ?? []);

  if (preservedWords) {
    content = protection.addWordProtection(content);
  }

  content = removePunctuation(content);

  content = protection.removeWordProtection(content);

  return content;
};
