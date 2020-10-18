import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { map, tap } from 'rxjs/operators';
import { EXTRA_FEATURE_NAVIGATOR } from '../extra.features';
import * as RouterActions from './navigator.actions';

@Injectable()
export class NavigatorEffects implements OnInitEffects {
  constructor(
    private action$: Actions,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
  ) {}

  ngrxOnInitEffects(): Action {
    return { type: `${EXTRA_FEATURE_NAVIGATOR}: Init` };
  }

  public goto$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.goto),
        map((action) => action.params),
        tap(({ commands, extras }) => this.router.navigate(commands, { ...extras })),
        // tap(({ commands, extras }) => this.router.navigate(commands, extras)),
        // tap(({ params: { commands, queryParams extras } }) => this.router.navigate(...commands, { queryParams, ...extras })),
      ),
    { dispatch: false },
  );

  public outletBottomBoard$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.outletBottomBoard),
        tap(() => {
          this.router.navigateByUrl('board(bottom:board)');
        }),
      ),
    { dispatch: false },
  );
  public outletBottomSettings = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.outletBottomSettings),
        tap(() => {
          this.router.navigateByUrl('settings(bottom:settings)');
        }),
      ),
    { dispatch: false },
  );
  public outletClosoe$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(RouterActions.outletClose),
        //close bottom sheet
        tap(({ route }) => {
          this.router.navigateByUrl(route);
        }),
      ),
    { dispatch: false },
  );
  //
  // public outletSettings$ = createEffect(
  //   () =>
  //     this.action$.pipe(
  //       ofType(RouterActions.outletSettings),
  //       // map((action) => action.outlet),
  //       tap(() => {
  //         // return this.router.navigate([{ outlets: { name: route } }]);
  //         return this.router.navigate([{ outlets: { 'bottom-control': ['settings'] } }], {
  //           relativeTo: this.route,
  //         });
  //         //return this.router.navigate(path, { queryParams, ...extras });
  //       }),
  //     ),
  //   { dispatch: false },
  // );

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
