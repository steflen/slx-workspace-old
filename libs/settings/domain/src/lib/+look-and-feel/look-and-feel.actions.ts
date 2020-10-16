import { createAction, props } from '@ngrx/store';
import { LookAndFeelModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_LOOK_AND_FEEL } from '../settings.features';

export const initLookAndFeel = createAction(
  `${SETTINGS_FEATURE_LOOK_AND_FEEL}: Init`,
  props<{ lookAndFeel?: LookAndFeelModel }>(),
);

export const setStickyHeader = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Sticky Header`,
  props<{ stickyHeader: boolean }>(),
);

export const setAvailableThemes = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Available Themes`,
  props<{ availableThemes: Array<string> }>(),
);

export const setActiveTheme = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Active Theme`,
  props<{ activeTheme: string }>(),
);

export const setDayTheme = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Day Theme`,
  props<{ dayTheme: string }>(),
);

export const setNightTheme = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Night Theme`,
  props<{ nightTheme: string }>(),
);

export const setNightStart = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Night Start`,
  props<{ nightStart: string }>(),
);

export const setNightEnd = createAction(
  `[${SETTINGS_FEATURE_LOOK_AND_FEEL}] Setting Night End`,
  props<{ nightEnd: string }>(),
);
