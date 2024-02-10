import { punctuationRemover } from "../punctuation/punctuation";

export const getSentenceComponents = (text: string) =>
  punctuationRemover(text).split(" ");
