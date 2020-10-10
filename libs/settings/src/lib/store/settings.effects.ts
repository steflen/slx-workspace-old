import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { interval, merge, of } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { setActiveLanguage, setActiveTheme, updateTimeAndDate } from './settings.actions';
import { selectEffectiveTheme } from './settings.selectors';

// https://ngrx.io/guide/effects
@Injectable()
export class SettingsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly overlayContainer: OverlayContainer,
    private translocoService: TranslocoService,
  ) {}

  updateTimeAndDate$ = createEffect(() =>
    // every 30 seconds, update the internal reference timestamp
    interval(30_000).pipe(map(() => updateTimeAndDate())),
  );

  public setActiveLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(setActiveLanguage),
        tap(({ activeLanguage }) => {
          this.translocoService.setActiveLang(activeLanguage);
        }),
      ),
    { dispatch: false },
  );

  setActiveTheme$ = createEffect(
    () =>
      merge(of('slx-init-effect-trigger'), this.actions$.pipe(ofType(setActiveTheme))).pipe(
        withLatestFrom(this.store.pipe(select(selectEffectiveTheme))),
        tap(([, /*action*/ effectiveTheme]) => {
          const classList = this.overlayContainer.getContainerElement().classList;
          const toRemove = Array.from(classList).filter((item: string) => item.includes('-theme'));
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(effectiveTheme);
        }),
      ),
    { dispatch: false },
  );

  // persistSettings = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(changeAutoNightThemeAction, changeLanguageAction, changeStickyHeaderAction, changeThemeAction),
  //       withLatestFrom(this.store.pipe(select(selectSettingsState))),
  //     ),
  //   { dispatch: false },
  // );

  // changeLanguage = createEffect(
  //   () =>
  //     this.store.pipe(
  //       select(changeLanguageAction),
  //       distinctUntilChanged(),
  //       tap(({ language }) => this.translationFacade.setLanguage(language)),
  //     ),
  //   { dispatch: false },
  // );

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
