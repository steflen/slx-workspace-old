import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MUX_FEATURE_TOP } from '@slx/mux-domain';
import { TopModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport

export const selectTopFeature = createFeatureSelector<TopModel>(MUX_FEATURE_TOP);
export const selectTopState = createSelector(selectTopFeature, (state: TopModel) => state);
