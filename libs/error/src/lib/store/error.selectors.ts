import { createFeatureSelector, createSelector } from '@ngrx/store';
// noinspection ES6PreferShortImport
import { ERROR_FEATURE_KEY } from '../error.feature-key';
import { ErrorState, selectAllErrors, selectErrorsTotal } from './error.reducer';

export const getState = createFeatureSelector<ErrorState>(ERROR_FEATURE_KEY);
export const getLastError = createSelector(getState, (state: ErrorState) => state.lastError);
export const getAllErrors = createSelector(getState, selectAllErrors);
export const getErrorCount = createSelector(getState, selectErrorsTotal);

export const errorQuery = {
  getState,
  getLastError,
  getAllErrors,
  getErrorCount,
};
