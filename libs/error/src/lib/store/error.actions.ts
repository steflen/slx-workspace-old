import { createAction, props } from '@ngrx/store';
import { ERROR_FEATURE_KEY } from '../error.feature-key';

export const addNewErrorAction = createAction(`[${ERROR_FEATURE_KEY}] Add New Error`, props<{ error: any }>());
export const resetAllErrorsAction = createAction(`[${ERROR_FEATURE_KEY}] Reset All Errors`);

// export const showErrorPage = createAction(`[${ERROR_FEATURE_KEY}] SHOW_ERROR_PAGE`);
// export const hideErrorPage = createAction(`[${ERROR_FEATURE_KEY}] HIDE_ERROR_PAGE`);
//
// export const throw404Error = createAction(
//   `[${ERROR_FEATURE_KEY}] THROW_404_ERROR`,
//   props<{ error: HttpErrorResponse }>(),
// );
//
// export const throwUnauthorizedError = createAction(
//   `[${ERROR_FEATURE_KEY}] THROW_UNAUTHORIZED_ERROR`,
//   props<{ error: HttpErrorResponse }>(),
// );
//
// export const throw500Error = createAction(
//   `[${ERROR_FEATURE_KEY}] THROW_500_ERROR`,
//   props<{ error: HttpErrorResponse }>(),
// );
//
// export const throwCustomError = createAction(
//   `[${ERROR_FEATURE_KEY}] THROW_CUSTOM_ERROR`,
//   props<{ error: any }>(),
// );
