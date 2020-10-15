import { createAction, props } from '@ngrx/store';
import { EXTRA_FEATURE_ERROR } from '../extra.feature-keys';

export const addNewErrorAction = createAction(
  `[${EXTRA_FEATURE_ERROR}] Add New Error`,
  props<{ error: any; date: number | Date; severity: 'default' | 'high' }>(),
);
export const resetAllErrorsAction = createAction(`[${EXTRA_FEATURE_ERROR}] Reset All Errors`);

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
