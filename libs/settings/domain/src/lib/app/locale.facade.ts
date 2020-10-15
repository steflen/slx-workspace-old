import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { Observable } from 'rxjs';
import * as LocaleActions from '../+locale/locale.actions';
import * as LocaleQuery from '../+locale/locale.selectors';

@Injectable({
  providedIn: 'root',
})
export class LocaleFacade {
  // LOCALE
  public activeLocale$: Observable<any> = this.store.select(LocaleQuery.selectActiveLocale);
  public availableLocales$: Observable<Array<string>> = this.store.select(LocaleQuery.selectAvailableLocales);
  // public timePickerFormat$: Observable<12 | 24> = this.store.select(LocaleQuery.selectTimePickerFormat);

  constructor(private store: Store, private dateFns: DateFnsConfigurationService) {}

  setAvailableLocales(availableLocales: Array<string>): void {
    this.store.dispatch(LocaleActions.setAvailableLocales({ availableLocales }));
  }

  setActiveLocale(activeLocale: string): void {
    if (activeLocale === 'de') {
      this.store.dispatch(LocaleActions.setActiveLocale({ activeLocale: 'de' /*, timePickerFormat: 24*/ }));
    } else {
      this.store.dispatch(LocaleActions.setActiveLocale({ activeLocale: 'en' /*, timePickerFormat: 12*/ }));
    }
    // activeLocale.code === 'en-US' ? 12 : activeLocale.code === 'de-DE' ? 24 : 12,
  }
}
