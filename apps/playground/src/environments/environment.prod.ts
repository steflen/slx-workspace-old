import { Environment } from '@slx/core';

export const environment: Environment = {
  production: true,
  appTitle: 'Playground',
  apiPath: '/api',
  availableLanguages: [
    { id: 'en', label: 'English' },
    { id: 'de', label: 'German' },
  ],
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
  availableLocales: ['en', 'de'],
  defaultLocale: 'en',
  availableThemes: ['light-theme', 'dark-theme'],
  defaultTheme: 'light-theme',
  dayTheme: 'light-theme',
  nightTheme: 'dark-theme',
  nightStart: '7:00 PM', //'19:00',
  nightEnd: '8:00 AM', //'08:00',
};
