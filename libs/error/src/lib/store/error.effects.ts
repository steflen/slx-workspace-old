import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { RouterFacade } from '@slx/router';

@Injectable()
export class ErrorEffects {
  constructor(private actions$: Actions, private routerFacade: RouterFacade) {}
}
