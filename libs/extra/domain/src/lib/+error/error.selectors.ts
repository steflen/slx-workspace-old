import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EXTRA_FEATURE_ERROR } from '../extra.features';
import { ErrorState, selectAllErrors, selectErrorsTotal } from './error.reducer';

export const getState = createFeatureSelector<ErrorState>(EXTRA_FEATURE_ERROR);
export const getLastError = createSelector(getState, (state: ErrorState) => state.lastError);
export const getAllErrors = createSelector(getState, selectAllErrors);
export const getErrorCount = createSelector(getState, selectErrorsTotal);
