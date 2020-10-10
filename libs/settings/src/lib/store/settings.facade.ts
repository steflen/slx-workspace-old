import { Injectable } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { Store } from '@ngrx/store';
import { DateFnsConfigurationService } from 'ngx-date-fns';
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
  public activeLocale$: Observable<any> = this.store.select(settings.selectActiveLocale);
  public availableLocales$: Observable<Array<string>> = this.store.select(settings.selectAvailableLocales);
  public timePickerFormat$: Observable<12 | 24> = this.store.select(settings.selectTimePickerFormat);

  // TIME & DATE
  public date$: Observable<Date> = this.store.select(settings.selectDate);
  public dateHumanReadable$: Observable<string> = this.store.select(settings.selectDateHumanReadable);
  public timeHumanReadable$: Observable<string> = this.store.select(settings.selectTimeHumanReadable);
  public dateTimeRfc$: Observable<string> = this.store.select(settings.selectDateTimeRFC);

  // THEMEING
  public availableThemes$: Observable<Array<string>> = this.store.select(settings.selectAvailableThemes);
  public dayTheme$: Observable<string> = this.store.select(settings.selectDayTheme);
  public nightTheme$: Observable<string> = this.store.select(settings.selectNightTheme);
  public nightStart$: Observable<string> = this.store.select(settings.selectNightStart);
  public nightEnd$: Observable<string> = this.store.select(settings.selectNightEnd);
  public isNight$: Observable<boolean> = this.store.select(settings.selectIsNight);
  public activeTheme$: Observable<string> = this.store.select(settings.selectActiveTheme);
  public effectiveTheme$: Observable<string> = this.store.select(settings.selectEffectiveTheme);

  constructor(private store: Store, private dateFns: DateFnsConfigurationService) {}

  setActiveLanguage(activeLanguage: string): void {
    this.store.dispatch(settingsActions.setActiveLanguage({ activeLanguage }));
  }

  setAvailableLanguages(availableLanguages: AvailableLangs): void {
    this.store.dispatch(settingsActions.setAvailableLanguages({ availableLanguages }));
  }

  setAvailableLocales(availableLocales: Array<string>): void {
    this.store.dispatch(settingsActions.setAvailableLocales({ availableLocales }));
  }

  setActiveLocale(activeLocale: string): void {
    if (activeLocale === 'de') {
      this.store.dispatch(settingsActions.setActiveLocale({ activeLocale: 'de', timePickerFormat: 24 }));
    } else {
      this.store.dispatch(settingsActions.setActiveLocale({ activeLocale: 'en', timePickerFormat: 12 }));
    }
    // activeLocale.code === 'en-US' ? 12 : activeLocale.code === 'de-DE' ? 24 : 12,
  }

  setActiveTheme(activeTheme: string) {
    this.store.dispatch(settingsActions.setActiveTheme({ activeTheme }));
  }

  setAvailableThemes(availableThemes: Array<string>) {
    this.store.dispatch(settingsActions.setAvailableThemes({ availableThemes }));
  }

  setDayTheme(dayTheme: string) {
    this.store.dispatch(settingsActions.setDayTheme({ dayTheme }));
  }

  setNightTheme(nightTheme: string): void {
    this.store.dispatch(settingsActions.setNightTheme({ nightTheme }));
  }

  setNightStart(nightStart: string): void {
    this.store.dispatch(settingsActions.setNightStart({ nightStart }));
  }

  setNightEnd(nightEnd: string): void {
    this.store.dispatch(settingsActions.setNightEnd({ nightEnd }));
  }
}
