import { createAction, props } from '@ngrx/store';
import { TopModel } from '@slx/shared-common';
import { PLATFORM_FEATURE_TOP } from '../platform.features';

export const initTop = createAction(`${PLATFORM_FEATURE_TOP}: Init`, props<{ top?: TopModel }>());
