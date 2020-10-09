import { Action, createReducer, on } from '@ngrx/store';
import { format, formatRFC7231 } from 'date-fns';
import {
  changeActiveLanguageAction,
  changeAvailableLanguages,
  changeCurrentThemeAction,
  changeDayThemeAction,
  changeDefaultLanguage,
  changeLocaleAction,
  changeNightThemeAction,
  changeNightTimeFromAction,
  changeNightTimeToAction,
  changeStickyHeaderAction,
  changeTimeAndDateAction,
  loadSettingsAction,
  loadSettingsFailureAction,
  loadSettingsSuccessAction,
} from './settings.actions';
import { SettingsState } from './settings.model';

export const initialState: SettingsState = {
  pending: false,

  availableThemes: ['light-theme', 'dark-theme'],
  theme: 'light-theme',
  dayTheme: 'light-theme',
  nightTheme: 'dark-theme',
  nightTimeFrom: '19:00:00',
  nightTimeTo: '08:00:00',
  stickyHeader: true,
  dateHumanReadable: format(new Date(), 'MM/dd/yyyy'),
  timeHumanReadable: format(new Date(), 'HH:mm:ss'),
  dateFormatted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
  dateTimeRFC7231: formatRFC7231(new Date()),
  date: new Date(),
  lastResponse: null,
  lastError: null,
  availableLanguages: null,
  defaultLanguage: null,
  activeLanguage: null,
  locale: 'en-US',
  timePickerFormat: 24,
};

const settingsReducer = createReducer(
  initialState,
  on(
    loadSettingsAction,
    (state, action): SettingsState => ({
      pending: true,
      ...state,
      ...action,
    }),
  ),
  on(
    loadSettingsSuccessAction,
    (state, action): SettingsState => ({
      pending: false,
      ...state,
      ...action,
    }),
  ),

  on(
    loadSettingsFailureAction,
    (state, { error, response }): SettingsState => ({
      ...state,
      pending: false,
      lastError: error,
      lastResponse: response,
    }),
  ),

  on(
    changeCurrentThemeAction,
    changeNightThemeAction,
    changeNightTimeFromAction,
    changeNightTimeToAction,
    changeDayThemeAction,
    changeStickyHeaderAction,
    changeActiveLanguageAction,
    changeAvailableLanguages,
    changeDefaultLanguage,
    (state, action): SettingsState => ({ ...state, ...action }),
  ),

  on(
    changeLocaleAction,
    (state, { locale }): SettingsState => ({
      ...state,
      locale,
      timePickerFormat: locale === 'en-US' ? 12 : locale === 'de-DE' ? 24 : 12,
    }),
  ),

  on(
    changeTimeAndDateAction,
    (state, { date }): SettingsState => ({
      ...state,
      date,
      dateFormatted: format(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      dateTimeRFC7231: formatRFC7231(date),
      dateHumanReadable: format(new Date(), 'MM/dd/yyyy'),
      timeHumanReadable: format(new Date(), 'HH:mm:ss'),
    }),
  ),
);

export function reducer(state: SettingsState | null, action: Action): SettingsState {
  return settingsReducer(state, action);
}
