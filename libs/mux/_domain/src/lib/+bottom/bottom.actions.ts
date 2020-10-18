import { createAction, props } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { MUX_FEATURE_BOTTOM } from '../mux.features';

export const initBottom = createAction(`${MUX_FEATURE_BOTTOM}: Init`, props<{ bottom?: BottomModel }>());
export const closeBottom = createAction(`${MUX_FEATURE_BOTTOM}: Close Bottom Sheet`);
export const openBottom = createAction(`${MUX_FEATURE_BOTTOM}: Open Bottom Sheet`);
export const toggleBottom = createAction(`${MUX_FEATURE_BOTTOM}: Toggle Bottom Sheet`);
