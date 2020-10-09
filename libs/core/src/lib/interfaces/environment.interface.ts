// interface for reflecting the current runtime environment
// injected via ENVIRONMENT_TOKEN

import { InjectionToken } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';

export declare type Locale = {
  id: string;
  label: string;
};
export declare type AvailableLocales = Array<Locale>;

export declare type Theme = {
  id: string;
  label: string;
};
export declare type AvailableThemes = Array<Theme>;

export interface Environment {
  production: boolean;
  appTitle: string;
  apiPath: string;
  availableLanguages: AvailableLangs;
  defaultLanguage: string;
  fallbackLanguage: string;
  availableLocales: AvailableLocales;
  defaultLocale: Locale;
  availableThemes: AvailableThemes;
  defaultTheme: Theme;
  dayTheme: Theme;
  nightTheme: Theme;
  nightTimeFrom: string;
  nightTimeTo: string;
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment');
