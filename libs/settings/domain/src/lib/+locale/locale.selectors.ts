import { createFeatureSelector, createSelector } from '@ngrx/store';
import { LocaleModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_LOCALE } from '../settings.features';

export const selectLocaleFeature = createFeatureSelector<LocaleModel>(SETTINGS_FEATURE_LOCALE);
export const selectLocaleState = createSelector(selectLocaleFeature, (state: LocaleModel) => state);

// LOCALE
export const selectActiveLocale = createSelector(selectLocaleState, ({ activeLocale }) => activeLocale);
export const selectAvailableLocales = createSelector(selectLocaleState, ({ availableLocales }) => availableLocales);
