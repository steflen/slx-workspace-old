import { Action, createReducer, on } from '@ngrx/store';
import { format, formatRFC7231 } from 'date-fns';
import * as actions from './settings.actions';
import { setActiveTheme } from './settings.actions';
import { SettingsState } from './settings.model';

export const initialState: SettingsState = {
  pending: false,

  stickyHeader: true,

  lastResponse: null,
  lastError: null,
  ///// THEME ////////////////////////////
  availableThemes: null,
  activeTheme: null,
  dayTheme: null,
  nightTheme: null,
  nightStart: null,
  nightEnd: null,
  ///// LANGUAGE ////////////////////////////
  availableLanguages: null,
  activeLanguage: null,
  ///// LOCALE ////////////////////////////
  availableLocales: null,
  activeLocale: null,
  timePickerFormat: null,
  ///// DATE & TIME ////////////////////////////
  dateHumanReadable: null,
  timeHumanReadable: null,
  dateFormatted: null,
  dateTimeRFC7231: null,
  date: null,
};

const settingsReducer = createReducer(
  initialState,
  on(
    actions.loadSettings,
    (state, action): SettingsState => ({
      pending: true,
      ...state,
      ...action,
    }),
  ),
  on(
    actions.loadSettingsSuccess,
    (state, action): SettingsState => ({
      pending: false,
      ...state,
      ...action,
    }),
  ),

  on(
    actions.loadSettingsFailure,
    (state, { error, response }): SettingsState => ({
      ...state,
      pending: false,
      lastError: error,
      lastResponse: response,
    }),
  ),

  on(
    actions.setStickyHeader,
    actions.setAvailableThemes,
    actions.setDayTheme,
    actions.setNightTheme,
    actions.setNightStart,
    actions.setNightEnd,
    actions.setAvailableLanguages,
    actions.setActiveLanguage,
    actions.setAvailableLocales,
    setActiveTheme,
    (state, action): SettingsState => ({ ...state, ...action }),
  ),

  on(
    actions.setActiveLocale,
    (state, { activeLocale, timePickerFormat }): SettingsState => ({
      ...state,
      activeLocale,
      timePickerFormat,
      // timePickerFormat: activeLocale.code === 'en-US' ? 12 : activeLocale.code === 'de-DE' ? 24 : 12,
    }),
  ),

  on(
    actions.updateTimeAndDate,
    (state): SettingsState => ({
      ...state,
      date: new Date(),
      dateFormatted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      dateTimeRFC7231: formatRFC7231(new Date()),
      dateHumanReadable: format(new Date(), 'MM/dd/yyyy'),
      timeHumanReadable: format(new Date(), 'HH:mm:ss'),
    }),
  ),
);

export function reducer(state: SettingsState | null, action: Action): SettingsState {
  return settingsReducer(state, action);
}
