import { createAction, props } from '@ngrx/store';
import { RouterStateParams } from '@slx/shared-common';
// noinspection ES6PreferShortImport
import { EXTRA_FEATURE_NAVIGATOR } from '../extra.feature-keys';
// noinspection ES6PreferShortImport

export const goto = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating To`, props<{ params: RouterStateParams }>());

export const back = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating Back`);

export const forward = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating Forward`);
