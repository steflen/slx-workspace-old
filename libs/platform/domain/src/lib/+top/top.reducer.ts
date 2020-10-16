import { Action, createReducer, on } from '@ngrx/store';
import { TopModel } from '@slx/shared-common';
import { initTop } from './top.actions';

export const initialState: TopModel = {
  peng: 'pong',
};

const reducer = createReducer(
  initialState,
  on(
    initTop,
    (state, action): TopModel => ({
      ...state,
      ...action.top,
    }),
  ),
);

export function topReducer(state: TopModel | null, action: Action): TopModel {
  return reducer(state, action);
}
