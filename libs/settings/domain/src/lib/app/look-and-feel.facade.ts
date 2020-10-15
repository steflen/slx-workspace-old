import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LookAndFeelActions from '../+look-and-feel/look-and-feel.actions';
// noinspection ES6PreferShortImport
import { LookAndFeelModel } from '../+look-and-feel/look-and-feel.model';
import * as LookAndFeelQuery from '../+look-and-feel/look-and-feel.selectors';
@Injectable({
  providedIn: 'root',
})
export class LookAndFeelFacade {
  constructor(private store: Store) {}
  public lookAndFeelState$: Observable<LookAndFeelModel> = this.store.select(LookAndFeelQuery.selectLookAndFeelState);

  // PAGE
  public stickyHeader: Observable<boolean> = this.store.select(LookAndFeelQuery.selectStickyHeader);

  // THEMEING
  public availableThemes$: Observable<Array<string>> = this.store.select(LookAndFeelQuery.selectAvailableThemes);
  public dayTheme$: Observable<string> = this.store.select(LookAndFeelQuery.selectDayTheme);
  public nightTheme$: Observable<string> = this.store.select(LookAndFeelQuery.selectNightTheme);
  public nightStart$: Observable<string> = this.store.select(LookAndFeelQuery.selectNightStart);
  public nightEnd$: Observable<string> = this.store.select(LookAndFeelQuery.selectNightEnd);
  public isNight$: Observable<boolean> = this.store.select(LookAndFeelQuery.selectIsNight);
  public activeTheme$: Observable<string> = this.store.select(LookAndFeelQuery.selectActiveTheme);
  public effectiveTheme$: Observable<string> = this.store.select(LookAndFeelQuery.selectEffectiveTheme);

  setActiveTheme(activeTheme: string) {
    this.store.dispatch(LookAndFeelActions.setActiveTheme({ activeTheme }));
  }

  setAvailableThemes(availableThemes: Array<string>) {
    this.store.dispatch(LookAndFeelActions.setAvailableThemes({ availableThemes }));
  }

  setDayTheme(dayTheme: string) {
    this.store.dispatch(LookAndFeelActions.setDayTheme({ dayTheme }));
  }

  setNightTheme(nightTheme: string): void {
    this.store.dispatch(LookAndFeelActions.setNightTheme({ nightTheme }));
  }

  setNightStart(nightStart: string): void {
    this.store.dispatch(LookAndFeelActions.setNightStart({ nightStart }));
  }

  setNightEnd(nightEnd: string): void {
    this.store.dispatch(LookAndFeelActions.setNightEnd({ nightEnd }));
  }
}
