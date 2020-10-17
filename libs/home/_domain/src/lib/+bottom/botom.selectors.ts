import { createFeatureSelector, createSelector } from '@ngrx/store';
import { HOME_FEATURE_BOTTOM } from '@slx/home-domain';
import { BottomModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport

export const selectBottomFeature = createFeatureSelector<BottomModel>(HOME_FEATURE_BOTTOM);
export const selectBottomState = createSelector(selectBottomFeature, (state: BottomModel) => state);
