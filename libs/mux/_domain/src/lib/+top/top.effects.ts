import { Inject, Injectable } from '@angular/core';
import { OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { initTop } from './top.actions';

@Injectable()
export class TopEffects implements OnInitEffects {
  constructor(@Inject(ENVIRONMENT_TOKEN) private env: Environment) {
    //empty
  }

  ngrxOnInitEffects(): Action {
    return initTop({ top: this.env['domain-init'].mux.top });
  }
}
