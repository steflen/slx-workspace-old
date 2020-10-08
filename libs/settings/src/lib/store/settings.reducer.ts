import { Action, createReducer, on } from '@ngrx/store';
import {
  changeCurrentThemeAction,
  changeDayThemeAction,
  changeHourAction,
  changeNightThemeAction,
  changeStickyHeaderAction,
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
  stickyHeader: true,
  hour: new Date().getHours(),
  lastResponse: null,
  lastError: null,
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
    changeDayThemeAction,
    changeStickyHeaderAction,
    changeHourAction,
    (state, action): SettingsState => ({ ...state, ...action }),
  ),
);

export function reducer(state: SettingsState | null, action: Action): SettingsState {
  return settingsReducer(state, action);
}
