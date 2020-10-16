import { Action, createReducer, on } from '@ngrx/store';
import { HoverlayModel } from '@slx/shared-common';
import { initHoverlay } from './hoverlay.actions';

export const initialState: HoverlayModel = {
  peng: 'pong',
};

const reducer = createReducer(
  initialState,
  on(
    initHoverlay,
    (state, action): HoverlayModel => ({
      ...state,
      ...action.hoverlay,
    }),
  ),
);

export function hoverlayReducer(state: HoverlayModel | null, action: Action): HoverlayModel {
  return reducer(state, action);
}
