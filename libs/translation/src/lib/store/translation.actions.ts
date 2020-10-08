import { createAction, props } from '@ngrx/store';
import { TRANSLATION_FEATURE_KEY } from '../translation.feature-key';

export const setLanguageAction = createAction(
  `[${TRANSLATION_FEATURE_KEY}] Set Language`,
  props<{ language: string }>(),
);
