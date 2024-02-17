export type Settings = {
  protectionList?: string[];
  overrideUniqueAlphaNumericGenerator?: () => string;
};

export * from "./services/frequency/frequency";
export * from "./services/wordCount/wordCount";
