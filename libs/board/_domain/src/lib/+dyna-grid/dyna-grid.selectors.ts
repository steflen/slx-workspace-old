import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DynaGridModel } from '@slx/shared-common';
import { BOARD_FEATURE_DYNA_GRID } from '../board.features';

export const selectDynaGridFeature = createFeatureSelector<DynaGridModel>(BOARD_FEATURE_DYNA_GRID);
export const selectDynaGridState = createSelector(selectDynaGridFeature, (state: DynaGridModel) => state);
