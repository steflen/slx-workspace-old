import { AvailableLangs } from '@ngneat/transloco';
import { AvailableLocales, AvailableThemes } from '@slx/core';

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
  availableThemes: AvailableThemes;

  // page
  stickyHeader: boolean;

  // time & date
  timeHumanReadable: string;
  dateHumanReadable: string;
  dateTimeRFC7231: string;
  dateFormatted: string;
  date: Date;

  // locale
  activeLocale: Locale;
  availableLocales: AvailableLocales;

  // language
  activeLanguage: string;
  availableLanguages: AvailableLangs;
  timePickerFormat: 12 | 24;
}
