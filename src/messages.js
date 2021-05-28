import LocalizedStrings from 'react-native-localization';
import messages_en from './translations/en.json';
import messages_hi_In from './translations/hi_IN.json';
import messages_kn_In from './translations/kn_IN.json';
import messages_te_In from './translations/te_IN.json';
import messages_bn_In from './translations/bn_IN.json';
import messages_ta_In from './translations/ta_IN.json';

const strings = {
  en: messages_en,
  hi_In: messages_hi_In,
  kn_In: messages_kn_In,
  te_In: messages_te_In,
  bn_In: messages_bn_In,
  ta_In: messages_ta_In,
};

export const languageOptions = [
  {label: 'English', locale: 'en', labelInEnglish: 'English'},
  {label: 'हिंदी', locale: 'hi_In', labelInEnglish: 'Hindi'},
  {label: 'ಕನ್ನಡ', locale: 'kn_In', labelInEnglish: 'Kannada'},
  {label: 'తెలుగు', locale: 'te_In', labelInEnglish: 'Telugu'},
  {label: 'বাংলা', locale: 'bn_In', labelInEnglish: 'Bangla'},
  {label: 'தமிழ்', locale: 'ta_In', labelInEnglish: 'Tamil'},
];

const messages = new LocalizedStrings(strings);

export const getLanguage = () => {
  const languageCode = messages.getLanguage();
  return languageOptions.find(option => option.locale === languageCode)
    .labelInEnglish;
};

export const changeLanguage = languageKey => {
  messages.setLanguage(languageKey);
};

export const t = str => messages[str] || str;

export default messages;
