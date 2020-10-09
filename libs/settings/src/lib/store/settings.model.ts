import { AvailableLangs } from '@ngneat/transloco';

export interface SettingsState {
  pending: boolean; // indicates a running request (e.g. for spinner)
  lastResponse?: string;
  lastError?: string | null; // the last error that occurred

  // theme
  dayTheme: string;
  nightTheme: string;
  nightTimeFrom: string;
  nightTimeTo: string;
  theme: string;
  availableThemes: Array<string>;

  // page
  stickyHeader: boolean;

  // time & date
  timeHumanReadable: string;
  dateHumanReadable: string;
  dateTimeRFC7231: string;
  dateFormatted: string;
  date: Date;

  // locale & language
  activeLanguage: string;
  locale: string;
  availableLanguages: AvailableLangs;
  defaultLanguage: string;
  timePickerFormat: 12 | 24;
}
