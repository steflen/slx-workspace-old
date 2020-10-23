import { Inject, Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { MuxFeatureBottomComponent } from '@slx/mux-feature-bottom';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import * as BottomActions from './bottom.actions';
import { initBottom } from './bottom.actions';
import { selectIsBottomOpen } from './bottom.selectors';

@Injectable()
export class BottomEffects implements OnInitEffects {
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private env: Environment,
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private bottomSheet: MatBottomSheet,
  ) {}

  ngrxOnInitEffects(): Action {
    return initBottom({ bottom: this.env['domain-init'].mux.bottom });
  }

  public toggleBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.toggleBottom),
        tap(() => {
          console.log('Bottom sheet has toggled');
        }),
      ),
    { dispatch: false },
  );

  public tryOpenBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.tryOpenBottom),
        withLatestFrom(this.store.select(selectIsBottomOpen)),
        map(([actions, isBottomOpen]) => {
          console.log('===>>> IS BOTTOM OPEN ? => ', isBottomOpen);
          if (isBottomOpen) {
            return BottomActions.denyOpenBottom();
          }
          return BottomActions.doOpenBottom();
        }),
      ),
    { dispatch: false },
  );

  doOpenBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.doOpenBottom),
        tap(() => {
          this.bottomSheet.open(MuxFeatureBottomComponent, {
            ariaLabel: 'Control',
            autoFocus: true,
            hasBackdrop: false,
            closeOnNavigation: false,
            restoreFocus: true,
            // direction: 'ltr', //"rtl"
            // panelClass: 'slx-board-control-panel',
            data: {},
            disableClose: true,
          });
        }),
      ),
    { dispatch: true },
  );

  denyOpenBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.denyOpenBottom),
        tap(() => {
          console.log('Bottom sheet is already opened');
        }),
      ),
    { dispatch: false },
  );

  public tryCloseBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.tryCloseBottom),
        withLatestFrom(this.store.select(selectIsBottomOpen)),
        map(([actions, isBottomOpen]) => {
          console.log('===>>> IS BOTTOM OPEN ? => ', isBottomOpen);
          if (isBottomOpen) {
            return BottomActions.doCloseBottom();
          }
          return BottomActions.denyOpenBottom();
        }),
      ),
    { dispatch: false },
  );

  doCloseBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.doCloseBottom),
        tap(() => {
          this.bottomSheet.dismiss();
        }),
      ),
    { dispatch: true },
  );

  denyCloseBottom$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(BottomActions.denyCloseBottom),
        tap(() => {
          console.log('Bottom sheet is already closed');
        }),
      ),
    { dispatch: false },
  );
}

/*
    import { Injectable } from '@angular/core';
    import { Actions, ofType, createEffect } from '@ngrx/effects';
    import { of } from 'rxjs';
    import { catchError, exhaustMap, map } from 'rxjs/operators';
    import {
      LoginPageActions,
      AuthApiActions,
    } from '../actions';
    import { Credentials } from '../models/user';
    import { AuthService } from '../services/auth.service';

    @Injectable()
    export class AuthEffects {
      login$ = createEffect(() =>
        this.actions$.pipe(
          // Filters by Action Creator 'login'
          ofType(LoginPageActions.login),
          exhaustMap(action =>
            this.authService.login(action.credentials).pipe(
              map(user => AuthApiActions.loginSuccess({ user })),
              catchError(error => of(AuthApiActions.loginFailure({ error })))
            )
          )
        )
      );

      constructor(
        private actions$: Actions,
        private authService: AuthService
      ) {}
    }
 */
