import { Action, createReducer, on } from '@ngrx/store';
import { DynaGridModel } from '@slx/shared-common';
import { initDynaGrid } from './dyna-grid.actions';

export const initialState: DynaGridModel = {
  bla: 'BLUBB',
};

const reducer = createReducer(
  initialState,
  on(
    initDynaGrid,
    (state, action): DynaGridModel => ({
      ...state,
      ...action.dynaGrid,
    }),
  ),
);

export function dynaGridReducer(state: DynaGridModel | null, action: Action): DynaGridModel {
  return reducer(state, action);
}
