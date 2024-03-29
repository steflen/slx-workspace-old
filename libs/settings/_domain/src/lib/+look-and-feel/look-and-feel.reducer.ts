import { Action, createReducer, on } from '@ngrx/store';
import { LookAndFeelModel } from '@slx/shared-common';
// noinspection ES6PreferShortImport
import * as actions from './look-and-feel.actions';

export const initialState: LookAndFeelModel = {
  stickyHeader: null,
  availableThemes: null,
  activeTheme: null,
  dayTheme: null,
  nightTheme: null,
  nightStart: null,
  nightEnd: null,
};

const reducer = createReducer(
  initialState,
  on(
    actions.initLookAndFeel,
    (state, action): LookAndFeelModel => ({
      ...state,
      ...action.lookAndFeel,
    }),
  ),
  on(actions.setStickyHeader, (state, { stickyHeader }): LookAndFeelModel => ({ ...state, stickyHeader })),
  on(actions.setAvailableThemes, (state, { availableThemes }): LookAndFeelModel => ({ ...state, availableThemes })),
  on(actions.setDayTheme, (state, { dayTheme }): LookAndFeelModel => ({ ...state, dayTheme })),
  on(actions.setNightTheme, (state, { nightTheme }): LookAndFeelModel => ({ ...state, nightTheme })),
  on(actions.setNightStart, (state, { nightStart }): LookAndFeelModel => ({ ...state, nightStart })),
  on(actions.setNightEnd, (state, { nightEnd }): LookAndFeelModel => ({ ...state, nightEnd })),
  on(actions.setActiveTheme, (state, { activeTheme }): LookAndFeelModel => ({ ...state, activeTheme })),
);

export function lookAndFeelReducer(state: LookAndFeelModel | null, action: Action): LookAndFeelModel {
  return reducer(state, action);
}
