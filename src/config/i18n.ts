import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // optional

const resources = {
  en: {
    translation: {
      welcome: "Welcome to React and react-i18next",
      description: "This is an example description",
    },
  },
  uz: {
    translation: {
      welcome: "React va react-i18next ga xush kelibsiz",
      description: "Bu bir misol sifatida keltirilgan ta'rif",
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать в React и react-i18next",
      description: "Это пример описания",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
