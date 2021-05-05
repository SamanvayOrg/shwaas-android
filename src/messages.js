import LocalizedStrings from 'react-native-localization';
import messages_en from './translations/en.json';
import messages_hi_In from './translations/hi_IN.json';

const strings = {
  en: messages_en,
  hi_In: messages_hi_In,
};

const messages = new LocalizedStrings(strings);

export const changeLanguage = languageKey => {
  messages.setLanguage(languageKey);
};

export const t = str => messages[str] || str;

export default messages;
