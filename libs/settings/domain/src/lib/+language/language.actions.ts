import { AvailableLangs } from '@ngneat/transloco';
import { createAction, props } from '@ngrx/store';
import { SETTINGS_FEATURE_LANGUAGE } from '../settings.features';

////////////////////////////////////////////////////////////////////////////////
//////////  LANGUAGE  //////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

export const setAvailableLanguages = createAction(
  `[${SETTINGS_FEATURE_LANGUAGE}] Setting Available Language`,
  props<{ availableLanguages: AvailableLangs }>(),
);

export const setActiveLanguage = createAction(
  `[${SETTINGS_FEATURE_LANGUAGE}] Setting Active Language`,
  props<{ activeLanguage: string }>(),
);
