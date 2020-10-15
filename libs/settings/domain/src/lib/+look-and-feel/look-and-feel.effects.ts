import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { merge, of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
// noinspection ES6PreferShortImport
import { setActiveTheme } from './look-and-feel.actions';
// noinspection ES6PreferShortImport
import { selectEffectiveTheme } from './look-and-feel.selectors';

// https://ngrx.io/guide/effects
@Injectable()
export class LookAndFeelEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly overlayContainer: OverlayContainer,
    private translocoService: TranslocoService,
  ) {}

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
}
