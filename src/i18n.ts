import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enJsonLangage from "./locales/en.json";
import esJsonLangage from "./locales/es.json";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources: {
      en: { ...enJsonLangage },
      es: { ...esJsonLangage },
    },
    lng: "en",
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
