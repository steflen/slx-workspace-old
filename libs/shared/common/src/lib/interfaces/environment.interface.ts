// interface for reflecting the current runtime environment
// injected via ENVIRONMENT_TOKEN

import { InjectionToken } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';

export interface Environment {
  production: boolean;
  appTitle: string;
  apiPath: string;
  language: {
    availableLanguages: AvailableLangs;
    defaultLanguage: string;
    fallbackLanguage: string;
  };
  locale: {
    availableLocales: Array<string>;
    defaultLocale: string;
  };
  lookAndFeel: {
    availableThemes: Array<string>;
    defaultTheme: string;
    dayTheme: string;
    nightTheme: string;
    nightStart: string;
    nightEnd: string;
  };
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment');
