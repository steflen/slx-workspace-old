import { createFeatureSelector, createSelector } from '@ngrx/store';
import { getHours } from 'date-fns';
import { SETTINGS_FEATURE_KEY } from '../settings.feature-key';
import { SettingsState } from './settings.model';

export const selectSettingsState = createFeatureSelector<SettingsState>(SETTINGS_FEATURE_KEY);

export const selectSettings = createSelector(selectSettingsState, (state: SettingsState) => state);

export const selectIsPending = createSelector(selectSettingsState, ({ pending }) => pending);
export const selectStickyHeader = createSelector(selectSettings, ({ stickyHeader }) => stickyHeader);

// LANGUAGE & LOCALE
export const selectActiveLanguage = createSelector(selectSettings, ({ activeLanguage }) => activeLanguage);
export const selectAvailableLanguages = createSelector(selectSettings, ({ availableLanguages }) => availableLanguages);

// LOCALE
export const selectActiveLocale = createSelector(selectSettings, ({ activeLocale }) => activeLocale);
export const selectAvailableLocales = createSelector(selectSettings, ({ availableLocales }) => availableLocales);

// DATE & TIME
export const selectTimeHumanReadable = createSelector(selectSettings, ({ timeHumanReadable }) => timeHumanReadable);
export const selectDateHumanReadable = createSelector(selectSettings, ({ dateHumanReadable }) => dateHumanReadable);
export const selectDate = createSelector(selectSettings, ({ date }) => date);
export const selectDateTimeRFC = createSelector(selectSettings, ({ dateTimeRFC7231 }) => dateTimeRFC7231);
export const selectTimePickerFormat = createSelector(selectSettings, ({ timePickerFormat }) => timePickerFormat);

// THEMEING
export const selectAvailableThemes = createSelector(selectSettings, ({ availableThemes }) => availableThemes);
export const selectDayTheme = createSelector(selectSettings, ({ dayTheme }) => dayTheme);
export const selectNightTheme = createSelector(selectSettings, ({ nightTheme }) => nightTheme);
export const selectNightTimeFrom = createSelector(selectSettings, ({ nightTimeFrom }) => nightTimeFrom);
export const selectNightTimeTo = createSelector(selectSettings, ({ nightTimeTo }) => nightTimeTo);
export const selectIsNight = createSelector(
  selectDate,
  selectNightTimeFrom,
  selectNightTimeTo,
  (date: Date, from, to) => getHours(date) >= from || getHours(date) <= to,
);
export const selectActiveTheme = createSelector(
  selectDayTheme,
  selectNightTheme,
  selectIsNight,
  (dayTheme, nightTheme, isNightHour) => (isNightHour ? nightTheme : dayTheme).toLowerCase(),
);
