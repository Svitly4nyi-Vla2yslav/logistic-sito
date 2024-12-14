import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// Ініціалізація i18next
i18n
  .use(HttpApi) // Для завантаження перекладів з файлів
  .use(LanguageDetector) // Для визначення мови
  .use(initReactI18next) // Інтеграція з React
  .init({
    fallbackLng: 'en', // Мова за замовчуванням
    debug: true, // Увімкнути для розробки
    supportedLngs: ['en', 'pl', 'de', 'fr'], // Підтримувані мови
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Шлях до файлів перекладу
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'], // Порядок визначення мови
      caches: ['cookie'], // Кешування мови
    },
    interpolation: {
      escapeValue: false, // Не екранувати HTML
    },
  });

export default i18n;
