import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PLATFORM_FEATURE_BOTTOM } from '@slx/platform-domain';
import { BottomModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport

export const selectBottomFeature = createFeatureSelector<BottomModel>(PLATFORM_FEATURE_BOTTOM);
export const selectBottomState = createSelector(selectBottomFeature, (state: BottomModel) => state);
