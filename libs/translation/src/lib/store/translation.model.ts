import { AvailableLangs } from '@ngneat/transloco';

export interface TranslationState {
  language: string;
  locale: string;
  availableLanguages: AvailableLangs;
  defaultLanguage: string;
}
