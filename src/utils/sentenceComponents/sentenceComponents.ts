import { Protection } from "../protection/protection";
import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (
  text: string,
  preservedWords: string[] = []
): string[] => {
  const protection = new Protection(preservedWords);
  let content = text;
  if (preservedWords) {
    content = protection.addWordProtection(text);
  }
  const sentenceComponents = punctuationRemover(content, preservedWords).split(
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
