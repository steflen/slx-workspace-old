import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_LANGUAGE } from '../settings.features';
import { LanguageModel } from './language.model';

export const selectLanguageFeature = createFeatureSelector<LanguageModel>(SETTINGS_FEATURE_LANGUAGE);
export const selectLanguageState = createSelector(selectLanguageFeature, (state: LanguageModel) => state);

export const selectActiveLanguage = createSelector(selectLanguageState, ({ activeLanguage }) => activeLanguage);
export const selectAvailableLanguages = createSelector(
  selectLanguageState,
  ({ availableLanguages }) => availableLanguages,
);
