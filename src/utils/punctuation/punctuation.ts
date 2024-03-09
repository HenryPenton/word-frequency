import { Config } from '../../config';
import { Protection } from '../protection/protection';

const removePunctuation = (text: string): string =>
  text
    .toLowerCase()
    .replace(/\//g, ' ')
    .replace(/[\r\n]/gm, ' ')
    .replace(/[^\w\s]/g, '');

export const punctuationRemover = (text: string, config: Config): string => {
  let content = text;
  const { protectionList } = config;

  const protection = new Protection(
    protectionList,
    config.overrideUniqueAlphaNumericGenerator,
  );

  content = protection.addWordProtection(content);
  content = removePunctuation(content);
  content = protection.removeWordProtection(content);

  return content;
};
