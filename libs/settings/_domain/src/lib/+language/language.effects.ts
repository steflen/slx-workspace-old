import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { tap } from 'rxjs/operators';
// noinspection ES6PreferShortImport
import { initLanguage, setActiveLanguage } from './language.actions';

// https://ngrx.io/guide/effects
@Injectable()
export class LanguageEffects {
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private env: Environment,
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private translocoService: TranslocoService,
  ) {}

  ngrxOnInitEffects(): Action {
    return initLanguage({ language: this.env['domain-init'].settings.language });
  }

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
