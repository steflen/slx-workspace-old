import { createFeatureSelector, createSelector } from '@ngrx/store';
import { differenceInMinutes, parse } from 'date-fns';
import { selectActiveLocale } from '../+locale/locale.selectors';
import { selectDate } from '../+time-and-date/time-and-date.selectors';
import { SETTINGS_FEATURE_LOOK_AND_FEEL } from '../settings.features';
import { LookAndFeelModel } from './look-and-feel.model';

export const selectLookAndFeelFeature = createFeatureSelector<LookAndFeelModel>(SETTINGS_FEATURE_LOOK_AND_FEEL);
export const selectLookAndFeelState = createSelector(selectLookAndFeelFeature, (state: LookAndFeelModel) => state);

export const selectStickyHeader = createSelector(selectLookAndFeelState, ({ stickyHeader }) => stickyHeader);
export const selectAvailableThemes = createSelector(selectLookAndFeelState, ({ availableThemes }) => availableThemes);
export const selectActiveTheme = createSelector(selectLookAndFeelState, ({ activeTheme }) => activeTheme);
export const selectDayTheme = createSelector(selectLookAndFeelState, ({ dayTheme }) => dayTheme);
export const selectNightTheme = createSelector(selectLookAndFeelState, ({ nightTheme }) => nightTheme);
export const selectNightStart = createSelector(selectLookAndFeelState, ({ nightStart }) => nightStart);
export const selectNightEnd = createSelector(selectLookAndFeelState, ({ nightEnd }) => nightEnd);
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
export const selectEffectiveTheme = createSelector(
  selectDayTheme,
  selectNightTheme,
  selectIsNight,
  (dayTheme, nightTheme, isNight) => (isNight ? nightTheme : dayTheme),
);
