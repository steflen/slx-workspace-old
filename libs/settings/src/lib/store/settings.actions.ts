import { AvailableLangs } from '@ngneat/transloco';
import { createAction, props } from '@ngrx/store';
import { SETTINGS_FEATURE_KEY } from '../settings.feature-key';

export const loadSettingsAction = createAction(`[${SETTINGS_FEATURE_KEY}] Load Settings From API`);

export const loadSettingsSuccessAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Load Settings Successful`,
  /*  props<{ ... }>(),*/
);

export const loadSettingsFailureAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Load Settings Failure`,
  props<{ error: string; response?: string }>(),
);

export const changeCurrentThemeAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Current Theme`,
  props<{ theme: string }>(),
);
export const changeNightThemeAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Night Theme`,
  props<{ nightTheme: string }>(),
);
export const changeNightTimeFromAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Night Time From`,
  props<{ nightTimeFrom: string }>(),
);
export const changeNightTimeToAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Night Time To`,
  props<{ nightTimeTo: string }>(),
);

export const changeDayThemeAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Day Theme`,
  props<{ dayTheme: string }>(),
);

export const changeStickyHeaderAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Sticky Header`,
  props<{ stickyHeader: boolean }>(),
);

export const changeTimeAndDateAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Time And Date`,
  props<{ date: Date }>(),
);

export const changeActiveLanguageAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Active Language`,
  props<{ activeLanguage: string }>(),
);
export const changeDefaultLanguage = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Default Language`,
  props<{ defaultLanguage: string }>(),
);
export const changeAvailableLanguages = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Available Language`,
  props<{ availableLanguages: AvailableLangs }>(),
);

export const changeLocaleAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Locale`,
  props<{ locale: string }>(),
);
