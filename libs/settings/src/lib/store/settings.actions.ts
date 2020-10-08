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

export const changeLanguageAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Language`,
  props<{ language: string }>(),
);

export const changeLocaleAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Locale`,
  props<{ locale: string }>(),
);

export const changeCurrentThemeAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Current Theme`,
  props<{ theme: string }>(),
);
export const changeNightThemeAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Night Theme`,
  props<{ nightTheme: string }>(),
);
export const changeDayThemeAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Day Theme`,
  props<{ dayTheme: string }>(),
);

export const changeStickyHeaderAction = createAction(
  `[${SETTINGS_FEATURE_KEY}] Changing Sticky Header`,
  props<{ stickyHeader: boolean }>(),
);

export const changeHourAction = createAction(`[${SETTINGS_FEATURE_KEY}] Changing Hours`, props<{ hour: number }>());
