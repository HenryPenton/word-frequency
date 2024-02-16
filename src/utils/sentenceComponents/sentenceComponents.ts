import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (text: string): string[] =>
  punctuationRemover(text).split(" ");
