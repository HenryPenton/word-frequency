import { Config } from "../../config";
import { Protection } from "../protection/protection";
import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (
  text: string,
  config: Config
): string[] => {
  const { protectionList } = config;
  const protection = new Protection(
    protectionList,
    config.overrideUniqueAlphaNumericGenerator
  );
  let content = text;

  content = protection.addWordProtection(text);

  const sentenceComponents = punctuationRemover(content, config).split(" ");
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
  config: Config
): Set<string> => {
  return new Set(getSentenceComponents(text, config));
};
