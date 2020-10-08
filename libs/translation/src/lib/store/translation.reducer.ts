import { Action, createReducer, on } from '@ngrx/store';
import { setLanguageAction } from './translation.actions';
import { TranslationState } from './translation.model';

export interface TranslationStore {
  readonly state: TranslationState;
}

export const translationInitialState: TranslationState = {
  language: null,
  defaultLanguage: null,
  availableLanguages: null,
  locale: 'de',
};

const translationReducer = createReducer(
  translationInitialState,
  on(setLanguageAction, (state, { language }) => ({
    ...state,
    language,
  })),
);

export function reducer(state: TranslationState | undefined, action: Action): TranslationState {
  return translationReducer(state, action);
}
