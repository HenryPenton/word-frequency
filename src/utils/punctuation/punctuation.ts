export const punctuationRemover = (text: string): string =>
  text.toLowerCase().replace(/\?/g, "").replace(/!/g, "").replace(/\./g, "");
