import { createAction } from '@ngrx/store';
import { SETTINGS_FEATURE_TIME_AND_DATE } from '../settings.features';

////////////////////////////////////////////////////////////////////////////////
//////////  TIME AND DATE  /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const updateTimeAndDate = createAction(`[${SETTINGS_FEATURE_TIME_AND_DATE}] Setting Time And Date`);

// export const setActiveLocale = createAction(
//   `[${SETTINGS_FEATURE_TIME_AND_DATE}] Setting Active Locale`,
//   props<{ activeLocale: string; timePickerFormat: 12 | 24 }>(),
// );
