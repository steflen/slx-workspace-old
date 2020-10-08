import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as TranslationActions from './translation.actions';
import { TranslationStore } from './translation.reducer';
import { translationQuery } from './translation.selectors';

export const availableLanguages: Array<string> = ['en', 'de'];

@Injectable({
  providedIn: 'root',
})
export class TranslationFacade {
  public state$ = this.store.select(translationQuery.selectTranslationState);
  public activeLanguage$ = this.store.select(translationQuery.selectLanguage);

  constructor(private store: Store<TranslationStore>) {}

  setLanguage(language: string): void {
    this.store.dispatch(TranslationActions.setLanguageAction({ language }));
  }

  getAvailableLanguages(): Array<string> {
    return availableLanguages;
  }
}
