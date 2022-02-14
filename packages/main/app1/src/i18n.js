import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { kr, en } from './locales';

i18n
  .use(initReactI18next)
  .init({
    resources: { kr, en },
    lng:"kr",
    fallbackLng: ['kr', 'en'],
    interpolation: { escapeValue: false },
    detection: { order: ['path', 'navigator'] }
  });

export default i18n;