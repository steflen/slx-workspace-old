import { createAction, props } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { PLATFORM_FEATURE_BOTTOM } from '../platform.features';

export const initBottom = createAction(`${PLATFORM_FEATURE_BOTTOM}: Init`, props<{ bottom?: BottomModel }>());
