import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const availableLanguages = ["az", "en", "ru"];
const option = {
  order: ["navigator", "htmlTag", "path", "subdomain"],
  checkWhitelist: true,
};

const languageDetector = new LanguageDetector(null, {
  order: ["localStorage", "navigator"],
  lookupLocalStorage: "i18nextLng",
});

languageDetector.init(option);

i18n
  .use(Backend)
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    lng: localStorage.getItem("i18nextLng") || "az",
    fallbackLng: "en",
    debug: true,
    whitelist: availableLanguages,
    interpolation: {
      escapeValue: false,
    },
  });

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("i18nextLng", lng);
});

export default i18n;