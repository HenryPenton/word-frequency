import { Protection } from "../protection/protection";
import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (
  text: string,
  protectionList?: string[]
): string[] => {
  const protection = new Protection(protectionList ?? []);
  let content = text;
  if (protectionList) {
    content = protection.addWordProtection(text);
  }
  const sentenceComponents = punctuationRemover(content, protectionList).split(
    " "
  );
  const unprotectedSentenceComponents = [];
  for (const sentenceComponent of sentenceComponents) {
    unprotectedSentenceComponents.push(
      protection.removeWordProtection(sentenceComponent)
    );
  }
  return unprotectedSentenceComponents;
};
