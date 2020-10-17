import { Inject, Injectable } from '@angular/core';
import { OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { initHoverlay } from './hoverlay.actions';

@Injectable()
export class HoverlayEffects implements OnInitEffects {
  constructor(@Inject(ENVIRONMENT_TOKEN) private env: Environment) {
    //empty
  }

  ngrxOnInitEffects(): Action {
    return initHoverlay({ hoverlay: this.env['domain-init'].board['hoverlay'] });
  }
}
