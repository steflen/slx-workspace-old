import { Injectable } from '@angular/core';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as TranslationActions from './translation.actions';
import { TranslationState } from './translation.model';
import { translationQuery } from './translation.selectors';

@Injectable({
  providedIn: 'root',
})
export class TranslationFacade {
  public state$: Observable<TranslationState> = this.store.select(translationQuery.selectTranslationState);
  public activeLanguage$: Observable<string> = this.store.select(translationQuery.selectLanguage);
  public languageChanges$: Observable<string> = this.translocoService.langChanges$;

  constructor(private store: Store, private translocoService: TranslocoService) {}

  setLanguage(language: string): void {
    this.store.dispatch(TranslationActions.setLanguageAction({ language }));
  }

  getAvailableLanguages(): AvailableLangs {
    return this.translocoService.getAvailableLangs();
  }
  getDefaultLanguage(): string {
    return this.translocoService.getDefaultLang();
  }
}
