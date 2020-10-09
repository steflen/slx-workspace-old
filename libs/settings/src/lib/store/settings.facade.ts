import { Injectable } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  changeActiveLanguageAction,
  changeAvailableLanguages,
  changeDefaultLanguage,
  changeLocaleAction,
  changeNightThemeAction,
  changeNightTimeFromAction,
  changeNightTimeToAction,
} from './settings.actions';
import { SettingsState } from './settings.model';
import * as settings from './settings.selectors';

@Injectable({
  providedIn: 'root',
})
export class SettingsFacade {
  public isPending$: Observable<boolean> = this.store.select(settings.selectIsPending);
  public settingsState$: Observable<SettingsState> = this.store.select(settings.selectSettingsState);

  // PAGE
  public stickyHeader: Observable<boolean> = this.store.select(settings.selectStickyHeader);

  // LANGUAGE & LOCALE
  public locale$: Observable<string> = this.store.select(settings.selectLocale);
  public activeLanguage$: Observable<string> = this.store.select(settings.selectActiveLanguage);
  public availableLanguages$: Observable<AvailableLangs> = this.store.select(settings.selectAvailableLanguages);
  public defaultLanguage$: Observable<string> = this.store.select(settings.selectDefaultLanguage);
  public timePickerFormat$: Observable<12 | 24> = this.store.select(settings.selectTimePickerFormat);

  // TIME & DATE
  public date$: Observable<Date> = this.store.select(settings.selectDate);
  public dateHumanReadable$: Observable<string> = this.store.select(settings.selectDateHumanReadable);
  public timeHumanReadable$: Observable<string> = this.store.select(settings.selectTimeHumanReadable);
  public dateTimeRfc$: Observable<string> = this.store.select(settings.selectDateTimeRFC);

  // THEMEING
  public availableThemes$: Observable<Array<string>> = this.store.select(settings.selectAvailableThemes);
  public effectiveTheme$: Observable<string> = this.store.select(settings.selectEffectiveTheme);
  public dayTheme$: Observable<string> = this.store.select(settings.selectDayTheme);
  public theme$: Observable<string> = this.store.select(settings.selectTheme);
  public nightTheme$: Observable<string> = this.store.select(settings.selectNightTheme);
  public nightTimeFrom$: Observable<string> = this.store.select(settings.selectNightTimeFrom);
  public nightTimeTo$: Observable<string> = this.store.select(settings.selectNightTimeTo);
  public isNight$: Observable<boolean> = this.store.select(settings.selectIsNight);

  constructor(private store: Store) {}

  setActiveLanguage(activeLanguage: string): void {
    this.store.dispatch(changeActiveLanguageAction({ activeLanguage }));
  }

  setDefaultLanguage(defaultLanguage: string): void {
    this.store.dispatch(changeDefaultLanguage({ defaultLanguage }));
  }

  setAvailableLanguages(availableLanguages: AvailableLangs): void {
    this.store.dispatch(changeAvailableLanguages({ availableLanguages }));
  }

  setLocale(locale: string): void {
    this.store.dispatch(changeLocaleAction({ locale }));
  }

  setNightTheme(nightTheme: string): void {
    this.store.dispatch(changeNightThemeAction({ nightTheme }));
  }

  setNightTimeFrom(nightTimeFrom: string): void {
    this.store.dispatch(changeNightTimeFromAction({ nightTimeFrom }));
  }

  setNightTimeTo(nightTimeTo: string): void {
    this.store.dispatch(changeNightTimeToAction({ nightTimeTo }));
  }
}
