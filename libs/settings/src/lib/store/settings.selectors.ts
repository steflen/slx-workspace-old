import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY } from '../settings.feature-key';
import { SettingsState } from './settings.model';

export const selectSettingsState = createFeatureSelector<SettingsState>(SETTINGS_FEATURE_KEY);

export const selectSettings = createSelector(selectSettingsState, (state: SettingsState) => state);
export const selectIsPending = createSelector(selectSettingsState, ({ pending }) => pending);
export const selectSettingsStickyHeader = createSelector(selectSettings, (state: SettingsState) => state.stickyHeader);

export const selectLanguage = createSelector(selectSettings, (state: SettingsState) => state.language);
export const selectLocale = createSelector(selectSettings, (state: SettingsState) => state.locale);

export const selectAvailableThemes = createSelector(selectSettings, (settings) => settings.availableThemes);
export const selectTheme = createSelector(selectSettings, (settings) => settings.theme);
export const selectDayTheme = createSelector(selectSettings, (settings) => settings.dayTheme);
export const selectNightTheme = createSelector(selectSettings, (settings) => settings.nightTheme);

export const selectHour = createSelector(selectSettings, (settings) => settings.hour);

export const selectIsNightHour = createSelector(selectHour, (hour) => hour >= 19 || hour <= 8);

export const selectEffectiveTheme = createSelector(
  selectDayTheme,
  selectNightTheme,
  selectIsNightHour,
  (dayTheme, nightTheme, isNightHour) => (isNightHour ? nightTheme : dayTheme).toLowerCase(),
);
