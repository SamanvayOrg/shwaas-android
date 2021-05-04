import LocalizedStrings from 'react-native-localization';
import messages_en from './translations/en.json';
import messages_hi_In from './translations/hi_IN.json';

const strings = {
  en: messages_en,
  hi_In: messages_hi_In,
};

const get = str => messages[str] || str;

let messages = new LocalizedStrings(strings);
messages.setLanguage('en');

export default {
  ...messages,
  get,
};
