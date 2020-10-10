import { createFeatureSelector, createSelector } from '@ngrx/store';
import { differenceInMinutes, parse } from 'date-fns';
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
export const selectNightStart = createSelector(selectSettings, ({ nightStart }) => nightStart);
export const selectNightEnd = createSelector(selectSettings, ({ nightEnd }) => nightEnd);
export const selectIsNight = createSelector(
  selectActiveLocale,
  selectDate,
  selectNightStart,
  selectNightEnd,
  (locale: string, date: Date, nightStart: string, nightEnd: string) =>
    // console.log(
    //   'delta now start = ',
    //   differenceInMinutes(date, parse(nightStart, locale === 'en' ? 'h:mm a' : 'hh:mm', date)),
    // ); //must be positive
    // console.log(
    //   'delta now end = ',
    //   differenceInMinutes(date, parse(nightEnd, locale === 'en' ? 'h:mm a' : 'hh:mm', date)),
    // ); //must be negative
    // return (
    differenceInMinutes(date, parse(nightStart, locale === 'en' ? 'h:mm a' : 'hh:mm', date)) > 0 &&
    differenceInMinutes(date, parse(nightEnd, locale === 'en' ? 'h:mm a' : 'hh:mm', date)) < 0,
);
export const selectActiveTheme = createSelector(
  selectDayTheme,
  selectNightTheme,
  selectIsNight,
  (dayTheme, nightTheme, isNightHour) => (isNightHour ? nightTheme : dayTheme),
);
