import { AvailableLangs } from '@ngneat/transloco';

export interface LanguageModel {
  // language
  activeLanguage: string;
  availableLanguages: AvailableLangs;
}
