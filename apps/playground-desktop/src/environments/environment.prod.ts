import { Environment } from '@slx/shared-common';
import { format, formatRFC7231 } from 'date-fns';
export const environment: Environment = {
  'production': false,
  'appTitle': 'Playground',
  'platform': 'desktop',
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
      timeAndDate: {
        timePickerFormat: 12,
        date: new Date(),
        dateFormatted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
        dateTimeRFC7231: formatRFC7231(new Date()),
        dateHumanReadable: format(new Date(), 'MM/dd/yyyy'),
        timeHumanReadable: format(new Date(), 'HH:mm:ss'),
      },
    },
    board: {
      'dyna-grid': { bla: 'aasdf' },
      'hoverlay': {
        peng: 'blubb123',
      },
    },
    mux: {
      bottom: { peng: 'dsfdsf' },
      top: { peng: 'aejfneoäif' },
    },
  },
};
