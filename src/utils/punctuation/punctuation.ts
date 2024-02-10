export const punctuationRemover = (text: string) =>
  text.toLowerCase().replace(/\?/g, "").replace(/!/g, "").replace(/\./g, "");
