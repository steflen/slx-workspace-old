import { OverlayContainer } from '@angular/cdk/overlay';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
// noinspection ES6PreferShortImport
import { initTimeAndDate, updateTimeAndDate } from './time-and-date.actions';

// https://ngrx.io/guide/effects
@Injectable()
export class TimeAndDateEffects {
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private env: Environment,
    private readonly actions$: Actions,
    private readonly store: Store,
    private readonly router: Router,
    private readonly overlayContainer: OverlayContainer,
    private translocoService: TranslocoService,
  ) {}

  ngrxOnInitEffects(): Action {
    return initTimeAndDate({ timeAndDate: this.env['domain-init'].settings.timeAndDate });
  }

  updateTimeAndDate$ = createEffect(() =>
    // every 30 seconds, update the internal reference timestamp
    interval(30_000).pipe(map(() => updateTimeAndDate())),
  );
}
