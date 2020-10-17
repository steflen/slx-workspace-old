import { createAction, props } from '@ngrx/store';
import { TimeAndDateModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_TIME_AND_DATE } from '../settings.features';

export const initTimeAndDate = createAction(
  `${SETTINGS_FEATURE_TIME_AND_DATE}: Init`,
  props<{ timeAndDate?: TimeAndDateModel }>(),
);

export const updateTimeAndDate = createAction(`[${SETTINGS_FEATURE_TIME_AND_DATE}] Setting Time And Date`);

// export const setActiveLocale = createAction(
//   `[${SETTINGS_FEATURE_TIME_AND_DATE}] Setting Active Locale`,
//   props<{ activeLocale: string; timePickerFormat: 12 | 24 }>(),
// );
