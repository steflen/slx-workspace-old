import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LanguageModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_LANGUAGE } from '../settings.features';

export const selectLanguageFeature = createFeatureSelector<LanguageModel>(SETTINGS_FEATURE_LANGUAGE);
export const selectLanguageState = createSelector(selectLanguageFeature, (state: LanguageModel) => state);

export const selectActiveLanguage = createSelector(selectLanguageState, ({ activeLanguage }) => activeLanguage);
export const selectAvailableLanguages = createSelector(
  selectLanguageState,
  ({ availableLanguages }) => availableLanguages,
);
