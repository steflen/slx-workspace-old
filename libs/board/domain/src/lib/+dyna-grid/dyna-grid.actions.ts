import { createAction, props } from '@ngrx/store';
import { DynaGridModel } from '@slx/shared-common';
import { BOARD_FEATURE_DYNA_GRID } from '../board.features';

export const initDynaGrid = createAction(`${BOARD_FEATURE_DYNA_GRID}: Init`, props<{ dynaGrid?: DynaGridModel }>());
