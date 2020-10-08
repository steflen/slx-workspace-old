import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
// noinspection ES6PreferShortImport
import { ERROR_FEATURE_KEY } from '../error.feature-key';
import * as errorActions from './error.actions';
import { ErrorEntity } from './error.models';

export interface ErrorState extends EntityState<ErrorEntity> {
  selectedId?: string | number;
  lastError: any;
}

export interface ErrorPartialState {
  readonly [ERROR_FEATURE_KEY]: ErrorState;
}

export const errorAdapter: EntityAdapter<ErrorEntity> = createEntityAdapter<ErrorEntity>();

export const errorInitialState: ErrorState = errorAdapter.getInitialState({
  // set initial required properties
  lastError: null,
});

const errorReducer = createReducer(
  errorInitialState,

  on(
    errorActions.addNewErrorAction,
    (state, { error }): ErrorState => errorAdapter.addOne(error, { ...state, lastError: error }),
  ),
  on(errorActions.resetAllErrorsAction, (state /*err*/): any => errorAdapter.removeAll(state)),
);

export function reducer(state: ErrorState | undefined, action: Action): ErrorState {
  return errorReducer(state, action);
}

export const getSelectedErrorId = (state: ErrorState) => state.selectedId;

const { selectAll, selectIds, selectEntities, selectTotal } = errorAdapter.getSelectors();

export const selectAllErrors = selectAll;
export const selectErrorsTotal = selectTotal;
export const selectErrorEntities = selectEntities;
export const selectErrorIds = selectIds;
