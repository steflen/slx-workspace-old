import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HoverlayModel } from '@slx/shared-common';
import { BOARD_FEATURE_DYNA_GRID } from '../board.features';

export const selectHoverlayFeature = createFeatureSelector<HoverlayModel>(BOARD_FEATURE_DYNA_GRID);
export const selectHoverlayState = createSelector(selectHoverlayFeature, (state: HoverlayModel) => state);
