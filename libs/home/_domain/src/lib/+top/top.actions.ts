import { createAction, props } from '@ngrx/store';
import { TopModel } from '@slx/shared-common';
import { HOME_FEATURE_TOP } from '../home.features';

export const initTop = createAction(`${HOME_FEATURE_TOP}: Init`, props<{ top?: TopModel }>());
