import { AvailableLangs } from '@ngneat/transloco';
import { createAction, props } from '@ngrx/store';
import { AvailableLocales, AvailableThemes, Theme } from '@slx/core';
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

export const setTimeAndDate = createAction(`[${SETTINGS_FEATURE_KEY}] Setting Time And Date`, props<{ date: Date }>());

////////////////////////////////////////////////////////////////////////////////
//////////  THEME  /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const setAvailableThemes = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Available Themes`,
  props<{ availableThemes: AvailableThemes }>(),
);

export const setActiveTheme = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Active Theme`,
  props<{ activeTheme: Theme }>(),
);

export const setDayTheme = createAction(`[${SETTINGS_FEATURE_KEY}] Setting Day Theme`, props<{ dayTheme: Theme }>());

export const setNightTheme = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Night Theme`,
  props<{ nightTheme: Theme }>(),
);

export const setNightTimeFrom = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Night Time From`,
  props<{ nightTimeFrom: string }>(),
);

export const setNightTimeTo = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Night Time To`,
  props<{ nightTimeTo: string }>(),
);

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
  props<{ availableLocales: AvailableLocales }>(),
);

export const setActiveLocale = createAction(
  `[${SETTINGS_FEATURE_KEY}] Setting Active Locale`,
  props<{ activeLocale: Locale }>(),
);
