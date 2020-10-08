import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TRANSLATION_FEATURE_KEY } from '../translation.feature-key';
import { TranslationState } from './translation.reducer';

export const selectTranslationState = createFeatureSelector<TranslationState>(TRANSLATION_FEATURE_KEY);

export const selectLanguage = createSelector(selectTranslationState, (state: TranslationState) => state.language);

export const translationQuery = {
  selectTranslationState,
  selectLanguage,
};
