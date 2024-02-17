import {
  ProtectionMap,
  addWordProtection,
  buildProtectionMap,
  removeWordProtection,
} from "../protection/protection";
import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (
  text: string,
  protectionList?: string[]
): string[] => {
  const protectionMap: ProtectionMap = new Map();
  let content = text
  if (protectionList) {
    buildProtectionMap(protectionList, protectionMap);
    content=addWordProtection(protectionMap, text);
  }
  const sentenceComponents = punctuationRemover(content, protectionList).split(
    " "
  );
  const unprotectedSentenceComponents = [];
  for (const sentenceComponent of sentenceComponents) {
    unprotectedSentenceComponents.push(
      removeWordProtection(protectionMap, sentenceComponent)
    );
  }
  return unprotectedSentenceComponents;
};
