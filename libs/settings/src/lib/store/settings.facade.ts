import { Injectable } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { AvailableLocales, AvailableThemes, Theme } from '@slx/core';
import { Observable } from 'rxjs';
import * as settingsActions from './settings.actions';
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

  // LANGUAGE
  public activeLanguage$: Observable<string> = this.store.select(settings.selectActiveLanguage);
  public availableLanguages$: Observable<AvailableLangs> = this.store.select(settings.selectAvailableLanguages);

  // LOCALE

  public activeLocale$: Observable<Locale> = this.store.select(settings.selectActiveLocale);
  public availableLocales$: Observable<AvailableLocales> = this.store.select(settings.availableLocales);
  public timePickerFormat$: Observable<12 | 24> = this.store.select(settings.selectTimePickerFormat);

  // TIME & DATE
  public date$: Observable<Date> = this.store.select(settings.selectDate);
  public dateHumanReadable$: Observable<string> = this.store.select(settings.selectDateHumanReadable);
  public timeHumanReadable$: Observable<string> = this.store.select(settings.selectTimeHumanReadable);
  public dateTimeRfc$: Observable<string> = this.store.select(settings.selectDateTimeRFC);

  // THEMEING
  public availableThemes$: Observable<AvailableThemes> = this.store.select(settings.selectAvailableThemes);
  public activeTheme$: Observable<string> = this.store.select(settings.selectActiveTheme);
  public dayTheme$: Observable<string> = this.store.select(settings.selectDayTheme);
  public nightTheme$: Observable<string> = this.store.select(settings.selectNightTheme);
  public nightTimeFrom$: Observable<string> = this.store.select(settings.selectNightTimeFrom);
  public nightTimeTo$: Observable<string> = this.store.select(settings.selectNightTimeTo);
  public isNight$: Observable<boolean> = this.store.select(settings.selectIsNight);

  constructor(private store: Store) {}

  setActiveLanguage(activeLanguage: string): void {
    this.store.dispatch(settingsActions.setActiveLanguage({ activeLanguage }));
  }

  setAvailableLanguages(availableLanguages: AvailableLangs): void {
    this.store.dispatch(settingsActions.setAvailableLanguages({ availableLanguages }));
  }

  setAvailableLocales(availableLocales: AvailableLocales): void {
    this.store.dispatch(settingsActions.setAvailableLocales({ availableLocales }));
  }

  setActiveLocale(activeLocale: Locale): void {
    this.store.dispatch(settingsActions.setActiveLocale({ activeLocale }));
  }

  setNightTheme(nightTheme: Theme): void {
    this.store.dispatch(settingsActions.setNightTheme({ nightTheme }));
  }

  setNightTimeFrom(nightTimeFrom: string): void {
    this.store.dispatch(settingsActions.setNightTimeFrom({ nightTimeFrom }));
  }

  setNightTimeTo(nightTimeTo: string): void {
    this.store.dispatch(settingsActions.setNightTimeTo({ nightTimeTo }));
  }

  setTimeAndDate(date: Date) {
    this.store.dispatch(settingsActions.setTimeAndDate({ date }));
  }
}
