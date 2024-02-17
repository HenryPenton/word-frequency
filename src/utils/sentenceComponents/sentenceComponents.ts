import { Settings } from "../..";
import { Protection } from "../protection/protection";
import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (
  text: string,
  settings: Settings
): string[] => {
  const { protectionList } = settings;
  const protection = new Protection(
    protectionList ?? [],
    settings.overrideUniqueAlphaNumericGenerator
  );
  let content = text;

  content = protection.addWordProtection(text);

  const sentenceComponents = punctuationRemover(content, settings).split(" ");
  const unprotectedSentenceComponents = [];
  for (const sentenceComponent of sentenceComponents) {
    unprotectedSentenceComponents.push(
      protection.removeWordProtection(sentenceComponent)
    );
  }

  return unprotectedSentenceComponents.filter((component) => component !== "");
};

export const getUniqueSentenceComponents = (
  text: string,
  settings: Settings
): Set<string> => {
  return new Set(getSentenceComponents(text, settings));
};
