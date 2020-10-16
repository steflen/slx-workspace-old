import { Environment } from '@slx/shared-common';

export const environment: Environment = {
  'production': false,
  'appTitle': 'Playground',
  'platform': 'mobile',
  'apiPath': '/api',
  'domain-init': {
    settings: {
      language: {
        availableLanguages: [
          { id: 'en', label: 'English' },
          { id: 'de', label: 'German' },
        ],
        activeLanguage: 'en',
      },
      locale: {
        availableLocales: ['en', 'de'],
        activeLocale: 'en',
      },
      lookAndFeel: {
        availableThemes: ['light-theme', 'dark-theme'],
        activeTheme: 'light-theme',
        stickyHeader: true,
        dayTheme: 'light-theme',
        nightTheme: 'dark-theme',
        nightStart: '1:00 AM', //'19:00',
        nightEnd: '8:00 AM', //'08:00',
      },
    },
    board: {
      'dyna-grid': { bla: 'aasdf' },
      'hoverlay': {
        peng: 'blubb123',
      },
    },
    platform: {
      bottom: { peng: 'dsfdsf' },
      top: { peng: 'aejfneoäif' },
    },
  },
};
