import { Settings } from "../..";
import { Protection } from "../protection/protection";

const removePunctuation = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\//g, " ")
    .replace(/[\r\n]+/gm, " ")
    .replace(/[^\w\s]/g, "");

export const punctuationRemover = (
  text: string,
  settings: Settings
): string => {
  let content = text;
  const { protectionList } = settings;

  const protection = new Protection(protectionList ?? []);

  if (protectionList) {
    content = protection.addWordProtection(content);
  }

  content = removePunctuation(content);

  content = protection.removeWordProtection(content);

  return content;
};
