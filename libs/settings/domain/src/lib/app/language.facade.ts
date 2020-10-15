import { Injectable } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { Observable } from 'rxjs';
import * as LanguageActions from '../+language/language.actions';
import * as LanguageQuery from '../+language/language.selectors';
@Injectable({
  providedIn: 'root',
})
export class LanguageFacade {
  public activeLanguage$: Observable<string> = this.store.select(LanguageQuery.selectActiveLanguage);
  public availableLanguages$: Observable<AvailableLangs> = this.store.select(LanguageQuery.selectAvailableLanguages);

  constructor(private store: Store, private dateFns: DateFnsConfigurationService) {}

  setActiveLanguage(activeLanguage: string): void {
    this.store.dispatch(LanguageActions.setActiveLanguage({ activeLanguage }));
  }

  setAvailableLanguages(availableLanguages: AvailableLangs): void {
    this.store.dispatch(LanguageActions.setAvailableLanguages({ availableLanguages }));
  }
}
