import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, OnInitEffects } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
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
}
