export type Settings = {
  protectionList?: string[];
  overrideUniqueAlphaNumericGenerator?: () => string;
};

export * from "./services/wordCount/wordCount";
export * from "./services/frequency/frequency";
