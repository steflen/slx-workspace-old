import { createAction, props } from '@ngrx/store';
// noinspection ES6PreferShortImport
import { ROUTER_FEATURE_KEY } from '../router.feature-key';
// noinspection ES6PreferShortImport
import { RouterStateParams } from '../router.interface';

export const goto = createAction(`[${ROUTER_FEATURE_KEY}] Navigating To`, props<{ params: RouterStateParams }>());

export const back = createAction(`[${ROUTER_FEATURE_KEY}] Navigating Back`);

export const forward = createAction(`[${ROUTER_FEATURE_KEY}] Navigating Forward`);
