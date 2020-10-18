import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { tap } from 'rxjs/operators';
import * as BottomActions from './bottom.actions';
import { initBottom } from './bottom.actions';

@Injectable()
export class BottomEffects implements OnInitEffects {
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private env: Environment,
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
  ) {}

  ngrxOnInitEffects(): Action {
    return initBottom({ bottom: this.env['domain-init'].mux.bottom });
  }

  public closeBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.closeBottom),
        tap(() => {
          console.log('CLOSE BOTTOM');
        }),
      ),
    { dispatch: false },
  );

  public openBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.openBottom),
        tap(() => {
          console.log('OPEN BOTTOM');
        }),
      ),
    { dispatch: false },
  );

  public toggleBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.toggleBottom),
        tap(() => {
          console.log('TOGGLE BOTTOM');
        }),
      ),
    { dispatch: false },
  );
}
