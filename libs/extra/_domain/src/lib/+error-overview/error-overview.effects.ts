import { Injectable } from '@angular/core';
import { Actions, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EXTRA_FEATURE_ERROR } from '../extra.features';

@Injectable()
export class ErrorOverviewEffects implements OnInitEffects {
  constructor(private actions$: Actions) {}

  ngrxOnInitEffects(): Action {
    return { type: `${EXTRA_FEATURE_ERROR}: Init` };
  }
}
