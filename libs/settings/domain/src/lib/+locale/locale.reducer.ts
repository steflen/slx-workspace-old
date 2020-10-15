import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './locale.actions';
import { LocaleModel } from './locale.model';

export const initialState: LocaleModel = {
  availableLocales: null,
  activeLocale: null,
};

const reducer = createReducer(
  initialState,

  on(actions.setAvailableLocales, (state, { availableLocales }) => ({ ...state, availableLocales })),

  on(actions.setActiveLocale, (state, { activeLocale }) => ({ ...state, activeLocale })),
);

export function localeReducer(state: LocaleModel | null, action: Action) {
  return reducer(state, action);
}
