import { createAction, props } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { MUX_FEATURE_BOTTOM } from '../mux.features';

export const initBottom = createAction(`${MUX_FEATURE_BOTTOM}: Init`, props<{ bottom?: BottomModel }>());

export const toggleBottom = createAction(`${MUX_FEATURE_BOTTOM}: Toggle Bottom Sheet`);

export const tryOpenBottom = createAction(`${MUX_FEATURE_BOTTOM}: Trying To Open Bottom Sheet`);
export const doOpenBottom = createAction(`${MUX_FEATURE_BOTTOM}: Opening Bottom Sheet`);
export const denyOpenBottom = createAction(`${MUX_FEATURE_BOTTOM}: Opening Bottom Sheet Denied`);

export const tryCloseBottom = createAction(`${MUX_FEATURE_BOTTOM}: Trying To Close Bottom Sheet`);
export const doCloseBottom = createAction(`${MUX_FEATURE_BOTTOM}: Closing Bottom Sheet`);
export const denyCloseBottom = createAction(`${MUX_FEATURE_BOTTOM}: Closing Bottom Sheet Denied`);
