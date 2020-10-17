import { AvailableLangs } from '@ngneat/transloco';
import { createAction, props } from '@ngrx/store';
import { LanguageModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_LANGUAGE } from '../settings.features';

export const initLanguage = createAction(`${SETTINGS_FEATURE_LANGUAGE}: Init`, props<{ language?: LanguageModel }>());

export const setAvailableLanguages = createAction(
  `[${SETTINGS_FEATURE_LANGUAGE}] Setting Available Language`,
  props<{ availableLanguages: AvailableLangs }>(),
);

export const setActiveLanguage = createAction(
  `[${SETTINGS_FEATURE_LANGUAGE}] Setting Active Language`,
  props<{ activeLanguage: string }>(),
);
