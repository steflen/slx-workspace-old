import { createAction, props } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { MUX_FEATURE_BOTTOM } from '../mux.features';

export const initBottom = createAction(`${MUX_FEATURE_BOTTOM}: Init`, props<{ bottom?: BottomModel }>());
