import { AvailableLangs } from '@ngneat/transloco';

export interface SettingsState {
  pending: boolean; // indicates a running request (e.g. for spinner)
  lastResponse?: string;
  lastError?: string | null; // the last error that occurred

  // THEMING
  // active theme gets calculated and can be selected
  availableThemes: Array<string>;
  dayTheme: string;
  nightTheme: string;
  nightStart: string;
  nightEnd: string;

  // page
  stickyHeader: boolean;

  // time & date
  timeHumanReadable: string;
  dateHumanReadable: string;
  dateTimeRFC7231: string;
  dateFormatted: string;
  date: Date;

  // locale
  activeLocale: string;
  availableLocales: Array<string>;

  // language
  activeLanguage: string;
  availableLanguages: AvailableLangs;
  timePickerFormat: 12 | 24;
}
