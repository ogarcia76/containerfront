import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

import global_es from '../locales/es/global.json';
import global_en from '../locales/en/global.json';

i18next.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
    resources: {
        es: {
            global: global_es
        },
        en: {
            global: global_en
        }
    }
})
