import { createAction, props } from '@ngrx/store';
import { NavigationParams } from '@slx/shared-common';
import { EXTRA_FEATURE_NAVIGATOR } from '../extra.features';

export const goto = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating`, props<{ params: NavigationParams }>());

export const outletBottomBoard = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Outlet Bottom Board Navigation`);
export const outletBottomSettings = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Outlet Bottom Settings Navigation`);
export const outletClose = createAction(
  `[${EXTRA_FEATURE_NAVIGATOR}] Outlet Close Navigation`,
  props<{ route: string }>(),
);

export const back = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating Back`);

export const forward = createAction(`[${EXTRA_FEATURE_NAVIGATOR}] Navigating Forward`);
