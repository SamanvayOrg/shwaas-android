import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import messages_en from './locales/en/translation.json';
import messages_hi_In from './locales/hi_IN/translation.json';
import messages_kn_In from './locales/kn_IN/translation.json';
import messages_te_In from './locales/te_IN/translation.json';
import messages_bn_In from './locales/bn_In/translation.json';
import messages_ta_In from './locales/ta_IN/translation.json';
import messages_mr from './locales/mr/translation.json';
import {languageAtom} from "@/atoms/settings";
import store from "@/atoms/atomStore";

export const languageOptions = [
    {label: 'English', locale: 'en', labelInEnglish: 'English'},
    {label: 'हिंदी', locale: 'hi_In', labelInEnglish: 'Hindi'},
    {label: 'ಕನ್ನಡ', locale: 'kn_In', labelInEnglish: 'Kannada'},
    {label: 'తెలుగు', locale: 'te_In', labelInEnglish: 'Telugu'},
    {label: 'বাংলা', locale: 'bn_In', labelInEnglish: 'Bangla'},
    {label: 'தமிழ்', locale: 'ta_In', labelInEnglish: 'Tamil'},
    {label: 'मराठी', locale: 'mr', labelInEnglish: 'Marathi'},
];

const resources = {
    "en": { translation: messages_en },
    "hi_In": { translation: messages_hi_In },
    "te_In": { translation: messages_te_In },
    "bn_In": { translation: messages_bn_In },
    "ta_In": { translation: messages_ta_In },
    "kn_In": { translation: messages_kn_In },
    "mr": { translation: messages_mr },
};

const initI18n = async () => {
    let savedLanguage = store.get(languageAtom);

    if (!savedLanguage) {
        savedLanguage = 'en';
    }

    i18n.use(initReactI18next).init({
        compatibilityJSON: "v3",
        resources,
        lng: savedLanguage,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
};

initI18n();

export default i18n;


