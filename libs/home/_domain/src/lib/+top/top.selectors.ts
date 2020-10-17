import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_FEATURE_TOP } from '@slx/home-domain';
import { TopModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport

export const selectTopFeature = createFeatureSelector<TopModel>(HOME_FEATURE_TOP);
export const selectTopState = createSelector(selectTopFeature, (state: TopModel) => state);
