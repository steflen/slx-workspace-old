import { Action, createReducer, on } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { initBottom } from './bottom.actions';

export const initialState: BottomModel = {
  peng: 'pong',
};

const reducer = createReducer(
  initialState,
  on(
    initBottom,
    (state, action): BottomModel => ({
      ...state,
      ...action.bottom,
    }),
  ),
);

export function bottomReducer(state: BottomModel | null, action: Action): BottomModel {
  return reducer(state, action);
}
