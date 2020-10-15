import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './language.actions';
import { LanguageModel } from './language.model';

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
);

export function languageReducer(state: LanguageModel | null, action: Action): LanguageModel {
  return reducer(state, action);
}
