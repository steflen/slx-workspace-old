import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_LOCALE } from '../settings.features';
import { LocaleModel } from './locale.model';

export const selectLocaleFeature = createFeatureSelector<LocaleModel>(SETTINGS_FEATURE_LOCALE);
export const selectLocaleState = createSelector(selectLocaleFeature, (state: LocaleModel) => state);

// LOCALE
export const selectActiveLocale = createSelector(selectLocaleState, ({ activeLocale }) => activeLocale);
export const selectAvailableLocales = createSelector(selectLocaleState, ({ availableLocales }) => availableLocales);
