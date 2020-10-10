import { Environment } from '@slx/shared';
// import 'zone.js/dist/zone-error'; // Included with Angular CLI.

export const environment: Environment = {
  production: false,
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
  nightStart: '1:00 AM', //'19:00',
  nightEnd: '8:00 AM', //'08:00',
};
