import { Action, createReducer, on } from '@ngrx/store';
import { LanguageModel } from '@slx/shared-common';
import * as actions from './language.actions';

export const initialState: LanguageModel = {
  availableLanguages: null,
  activeLanguage: null,
};

const reducer = createReducer(
  initialState,
  on(
    actions.setAvailableLanguages,
    (state, { availableLanguages }): LanguageModel => ({ ...state, availableLanguages }),
  ),
  on(actions.setActiveLanguage, (state, { activeLanguage }): LanguageModel => ({ ...state, activeLanguage })),

  on(
    actions.initLanguage,
    (state, action): LanguageModel => ({
      ...state,
      ...action.language,
    }),
  ),
);

export function languageReducer(state: LanguageModel | null, action: Action): LanguageModel {
  return reducer(state, action);
}
