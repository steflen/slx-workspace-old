import { Action, createReducer, on } from '@ngrx/store';
import { LocaleModel } from '@slx/shared-common';
import * as actions from './locale.actions';

export const initialState: LocaleModel = {
  availableLocales: null,
  activeLocale: null,
};

const reducer = createReducer(
  initialState,

  on(actions.setAvailableLocales, (state, { availableLocales }) => ({ ...state, availableLocales })),

  on(actions.setActiveLocale, (state, { activeLocale }) => ({ ...state, activeLocale })),

  on(
    actions.initLocale,
    (state, action): LocaleModel => ({
      ...state,
      ...action.locale,
    }),
  ),
);

export function localeReducer(state: LocaleModel | null, action: Action) {
  return reducer(state, action);
}
