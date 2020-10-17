import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLATFORM_FEATURE_TOP } from '@slx/platform-domain';
import { TopModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport

export const selectTopFeature = createFeatureSelector<TopModel>(PLATFORM_FEATURE_TOP);
export const selectTopState = createSelector(selectTopFeature, (state: TopModel) => state);
