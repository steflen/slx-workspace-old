import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { EXTRA_FEATURE_NAVIGATOR } from '../extra.features';
import * as RouterActions from './navigator.actions';

@Injectable()
export class NavigatorEffects implements OnInitEffects {
  constructor(private action$: Actions, private router: Router, private location: Location) {}

  ngrxOnInitEffects(): Action {
    return { type: `${EXTRA_FEATURE_NAVIGATOR}: Init` };
  }

  public goto$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.goto),
        map((action) => action.params),
        tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras })),
      ),
    { dispatch: false },
  );

  public forward$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.forward),
        tap(() => this.location.forward()),
      ),
    { dispatch: false },
  );

  public back$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.back),
        tap(() => this.location.back()),
      ),
    { dispatch: false },
  );
}
