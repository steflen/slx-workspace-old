import { createAction, props } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { HOME_FEATURE_BOTTOM } from '../home.features';

export const initBottom = createAction(`${HOME_FEATURE_BOTTOM}: Init`, props<{ bottom?: BottomModel }>());
