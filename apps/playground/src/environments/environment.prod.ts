import { Environment } from '@slx/core';

export const environment: Environment = {
  production: true,
  appTitle: 'Playground',
  apiPath: '/api',
  availableLanguages: [
    { id: 'en', label: 'English' },
    { id: 'de', label: 'Deutsch' },
  ],
  defaultLanguage: 'en',
  fallbackLanguage: 'en',
};
