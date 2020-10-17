import { createAction, props } from '@ngrx/store';
import { TopModel } from '@slx/shared-common';
import { MUX_FEATURE_TOP } from '../mux.features';

export const initTop = createAction(`${MUX_FEATURE_TOP}: Init`, props<{ top?: TopModel }>());
