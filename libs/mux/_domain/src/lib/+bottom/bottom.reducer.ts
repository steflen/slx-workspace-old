import { Action, createReducer, on } from '@ngrx/store';
import { BottomModel } from '@slx/shared-common';
import { doCloseBottom, doOpenBottom, initBottom, toggleBottom } from './bottom.actions';

export const initialState: BottomModel = {
  isBottomOpen: false,
};

const reducer = createReducer(
  initialState,
  on(
    initBottom,
    (state): BottomModel => ({
      ...state,
    }),
  ),
  on(
    toggleBottom,
    (state): BottomModel => ({
      isBottomOpen: !state.isBottomOpen,
    }),
  ),
  on(
    doOpenBottom,
    (state): BottomModel => ({
      isBottomOpen: true,
    }),
  ),
  on(
    doCloseBottom,
    (state): BottomModel => ({
      isBottomOpen: false,
    }),
  ),
);

export function bottomReducer(state: BottomModel | null, action: Action): BottomModel {
  return reducer(state, action);
}
