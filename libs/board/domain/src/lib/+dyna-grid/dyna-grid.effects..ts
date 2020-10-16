import { Inject, Injectable } from '@angular/core';
import { OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { initDynaGrid } from './dyna-grid.actions';

@Injectable()
export class DynaGridEffects implements OnInitEffects {
  constructor(@Inject(ENVIRONMENT_TOKEN) private env: Environment) {
    //empty
  }

  ngrxOnInitEffects(): Action {
    return initDynaGrid({ dynaGrid: this.env['domain-init'].board['dyna-grid'] });
  }
}
