import { createAction, props } from '@ngrx/store';
import { NavigationParams } from '@slx/shared-common';
import { EXTRA_FEATURE_NAVIGATOR } from '../extra.features';

export const goto = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating`, props<{ params: NavigationParams }>());

export const outletBoard = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Outlet Board`);
export const outletSettings = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Outlet Settings`);

export const back = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating Back`);

export const forward = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating Forward`);
