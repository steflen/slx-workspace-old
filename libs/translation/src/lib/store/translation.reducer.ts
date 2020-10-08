import { Action, createReducer, on } from '@ngrx/store';
import { setLanguageAction } from './translation.actions';

export interface TranslationState {
  language: string;
}

export interface TranslationStore {
  readonly state: TranslationState;
}

export const i18nInitialState: TranslationState = {
  language: 'en',
};

const reducer = createReducer(
  i18nInitialState,
  on(setLanguageAction, (state, { language }) => ({
    ...state,
    language,
  })),
);

export function translationReducer(state: TranslationState | undefined, action: Action): TranslationState {
  return reducer(state, action);
}
