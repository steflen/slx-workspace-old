import { createAction, props } from '@ngrx/store';
import { LocaleModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_LOCALE } from '../settings.features';

export const initLocale = createAction(`${SETTINGS_FEATURE_LOCALE}: Init`, props<{ locale?: LocaleModel }>());

export const setAvailableLocales = createAction(
  `[${SETTINGS_FEATURE_LOCALE}] Setting Available Locales`,
  props<{ availableLocales: Array<string> }>(),
);

export const setActiveLocale = createAction(
  `[${SETTINGS_FEATURE_LOCALE}] Setting Active Locale`,
  props<{ activeLocale: string }>(),
);
