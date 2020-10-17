import { OverlayContainer } from '@angular/cdk/overlay';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, select, Store } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { merge, of } from 'rxjs';
import { tap, withLatestFrom } from 'rxjs/operators';
// noinspection ES6PreferShortImport
import { initLookAndFeel, setActiveTheme } from './look-and-feel.actions';
// noinspection ES6PreferShortImport
import { selectEffectiveTheme } from './look-and-feel.selectors';

// https://ngrx.io/guide/effects
@Injectable()
export class LookAndFeelEffects implements OnInitEffects {
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private env: Environment,
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly overlayContainer: OverlayContainer,
    private translocoService: TranslocoService,
  ) {}

  ngrxOnInitEffects(): Action {
    return initLookAndFeel({ lookAndFeel: this.env['domain-init'].settings.lookAndFeel });
  }

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
