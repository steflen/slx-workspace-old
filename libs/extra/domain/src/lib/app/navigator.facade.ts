import { Injectable } from '@angular/core';
import { BaseRouterStoreState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { RouterStateParams } from '@slx/shared-common';
import * as NavigatorActions from '../+navigator/navigator.actions';

@Injectable({
  providedIn: 'root',
})
export class NavigatorFacade {
  constructor(private store: Store<BaseRouterStoreState>) {}

  public goto(params: RouterStateParams): void {
    this.store.dispatch(NavigatorActions.goto({ params }));
  }

  public back(): void {
    this.store.dispatch(NavigatorActions.back());
  }

  public forward(): void {
    this.store.dispatch(NavigatorActions.forward());
  }
}
