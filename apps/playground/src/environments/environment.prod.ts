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
  availableLocales: [
    { id: 'en-US', label: 'USA' },
    { id: 'de-DE', label: 'Germany' },
  ],
  defaultLocale: { id: 'en-US', label: 'USA' },
  defaultTheme: { id: 'light-theme', label: 'Light Theme' },
  dayTheme: { id: 'light-theme', label: 'Light Theme' },
  nightTheme: { id: 'dark-theme', label: 'Dark Theme' },
  nightTimeFrom: '19:00:00',
  nightTimeTo: '08:00:00',
  availableThemes: [
    { id: 'light-theme', label: 'Light Theme' },
    { id: 'dark-theme', label: 'Dark Theme' },
  ],
};
