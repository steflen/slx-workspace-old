import { Environment } from '@slx/core';
// import 'zone.js/dist/zone-error'; // Included with Angular CLI.

export const environment: Environment = {
  production: false,
  appTitle: 'Playground',
  apiPath: '/mock-api',
  availableLanguages: [
    { id: 'en', label: 'English' },
    { id: 'de', label: 'Deutsch' },
  ],
};
