import { Environment } from '@slx/shared-common';

export const environment: Environment = {
  production: false,
  appTitle: 'Playground',
  apiPath: '/api',
  language: {
    availableLanguages: [
      { id: 'en', label: 'English' },
      { id: 'de', label: 'German' },
    ],
    defaultLanguage: 'en',
    fallbackLanguage: 'en',
  },
  locale: {
    availableLocales: ['en', 'de'],
    defaultLocale: 'en',
  },
  lookAndFeel: {
    availableThemes: ['light-theme', 'dark-theme'],
    defaultTheme: 'light-theme',
    dayTheme: 'light-theme',
    nightTheme: 'dark-theme',
    nightStart: '1:00 AM', //'19:00',
    nightEnd: '8:00 AM', //'08:00',
  },
};
