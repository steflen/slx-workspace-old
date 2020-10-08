import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { distinctUntilChanged, map, mapTo, tap } from 'rxjs/operators';
import { TranslationFacade } from '../../../../translation/src/lib/store/translation.facade';
import { changeHourAction, changeLanguageAction } from './settings.actions';

// https://ngrx.io/guide/effects
@Injectable()
export class SettingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly overlayContainer: OverlayContainer,
    private readonly translationFacade: TranslationFacade,
  ) {}

  changeHour = createEffect(() =>
    interval(60_000).pipe(
      mapTo(new Date().getHours()),
      distinctUntilChanged(),
      map((hour) => changeHourAction({ hour })),
    ),
  );

  // persistSettings = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(changeAutoNightThemeAction, changeLanguageAction, changeStickyHeaderAction, changeThemeAction),
  //       withLatestFrom(this.store.pipe(select(selectSettingsState))),
  //     ),
  //   { dispatch: false },
  // );

  changeLanguage = createEffect(
    () =>
      this.store.pipe(
        select(changeLanguageAction),
        distinctUntilChanged(),
        tap(({ language }) => this.translationFacade.setLanguage(language)),
      ),
    { dispatch: false },
  );

  // onLanguageSelect(x: any): void {
  //   if (x.value === 'de') {
  //     console.log('LOCALE TO DE');
  //     this.dateConfig.setLocale(de);
  //   } else {
  //     console.log('LOCALE TO enUS');
  //     this.dateConfig.setLocale(enUS);
  //   }
  //   this.store.dispatch(actionSettingsChangeLanguage({ language: x.value }));
  // }
  // onLanguageSelect(x: Language): void {
  //   this.store.dispatch(actionSettingsChangeLanguage({ language: x }));
  // }
  //
  // onThemeSelect(x: string): void {
  //   this.store.dispatch(actionSettingsChangeTheme({ theme: x }));
  // }
  //
  // onAutoNightModeToggle(x: boolean): void {
  //   this.store.dispatch(actionSettingsChangeAutoNightMode({ autoNightMode: x }));
  // }
  //
  // onStickyHeaderToggle(x: boolean): void {
  //   this.store.dispatch(actionSettingsChangeStickyHeader({ stickyHeader: x }));
  // }
  //
  // onPageAnimationsToggle(x: boolean): void {
  //   this.store.dispatch(actionSettingsChangeAnimationsPage({ pageAnimations: x }));
  // }
  //
  // onElementsAnimationsToggle(x: boolean): void {
  //   this.store.dispatch(actionSettingsChangeAnimationsElements({ elementsAnimations: x }));
  // }
}
