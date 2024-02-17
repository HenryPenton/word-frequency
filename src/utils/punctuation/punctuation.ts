import {
  PreservationMap,
  buildPreservationMap,
  addWordProtection,
  removeWordProtection,
} from "../protection/protection";

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
  const preservationMap: PreservationMap = new Map();

  if (preservedWords) {
    buildPreservationMap(preservedWords, preservationMap);
    content = addWordProtection(preservationMap, content);
  }

  content = removePunctuation(content);

  content = removeWordProtection(preservationMap, content);

  return content;
};
