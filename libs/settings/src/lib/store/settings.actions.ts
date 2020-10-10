import { AvailableLangs } from '@ngneat/transloco';
import { createAction, props } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY } from '../settings.feature-key';

////////////////////////////////////////////////////////////////////////////////
//////////  API / PERSIST  /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const loadSettings = createAction(`[${SETTINGS_FEATURE_KEY}] Load Settings From API`);

export const loadSettingsSuccess = createAction(
  `[${SETTINGS_FEATURE_KEY}] Load Settings Successful`,
  /*  props<{ ... }>(),*/
);

export const loadSettingsFailure = createAction(
  `[${SETTINGS_FEATURE_KEY}] Load Settings Failure`,
  props<{ error: string; response?: string }>(),
);

////////////////////////////////////////////////////////////////////////////////
//////////  PAGE  /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const setStickyHeader = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Sticky Header`,
  props<{ stickyHeader: boolean }>(),
);

////////////////////////////////////////////////////////////////////////////////
//////////  TIME AND DATE  /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const updateTimeAndDate = createAction(`[${SETTINGS_FEATURE_KEY}] Setting Time And Date`);

////////////////////////////////////////////////////////////////////////////////
//////////  THEME  /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const setAvailableThemes = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Available Themes`,
  props<{ availableThemes: Array<string> }>(),
);

export const setActiveTheme = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Active Theme`,
  props<{ activeTheme: string }>(),
);

export const setDayTheme = createAction(`[${SETTINGS_FEATURE_KEY}] Setting Day Theme`, props<{ dayTheme: string }>());

export const setNightTheme = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Night Theme`,
  props<{ nightTheme: string }>(),
);

export const setNightStart = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Night Start`,
  props<{ nightStart: string }>(),
);

export const setNightEnd = createAction(`[${SETTINGS_FEATURE_KEY}] Setting Night End`, props<{ nightEnd: string }>());

////////////////////////////////////////////////////////////////////////////////
//////////  LANGUAGE  //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const setAvailableLanguages = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Available Language`,
  props<{ availableLanguages: AvailableLangs }>(),
);

export const setActiveLanguage = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Active Language`,
  props<{ activeLanguage: string }>(),
);

////////////////////////////////////////////////////////////////////////////////
//////////  LOCALE  ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const setAvailableLocales = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Available Locales`,
  props<{ availableLocales: Array<string> }>(),
);

export const setActiveLocale = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Active Locale`,
  props<{ activeLocale: string; timePickerFormat: 12 | 24 }>(),
);
