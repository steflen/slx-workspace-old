import { OverlayContainer } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
// noinspection ES6PreferShortImport
import { updateTimeAndDate } from './time-and-date.actions';

// https://ngrx.io/guide/effects
@Injectable()
export class TimeAndDateEffects {
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
}
