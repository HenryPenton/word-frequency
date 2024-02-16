export const punctuationRemover = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\//g, " ")
    .replace(/[\r\n]+/gm, " ")
    .replace(/[^\w\s]/g, "");
