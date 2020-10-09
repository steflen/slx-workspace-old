// interface for reflecting the current runtime environment
// injected via ENVIRONMENT_TOKEN

import { InjectionToken } from '@angular/core';
import { Language } from '@slx/translation';

export interface Environment {
  production: boolean;
  appTitle: string;
  apiPath: string;
  availableLanguages: Array<Language>;
  defaultLanguage: string;
  fallbackLanguage: string;
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('Environment');
