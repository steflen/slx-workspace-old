import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MUX_FEATURE_BOTTOM } from '@slx/mux-domain';
import { BottomModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport

export const selectBottomFeature = createFeatureSelector<BottomModel>(MUX_FEATURE_BOTTOM);
export const selectBottomState = createSelector(selectBottomFeature, (state: BottomModel) => state);

export const selectIsBottomOpen = createSelector(selectBottomState, ({ isBottomOpen }) => isBottomOpen);
