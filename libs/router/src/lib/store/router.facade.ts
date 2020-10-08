import { Injectable } from '@angular/core';
import { BaseRouterStoreState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { RouterStateParams } from '../router.interface';
import * as RouterActions from './router.actions';

@Injectable({
  providedIn: 'root',
})
export class RouterFacade {
  constructor(private store: Store<BaseRouterStoreState>) {}

  public goto(params: RouterStateParams): void {
    this.store.dispatch(RouterActions.goto({ params }));
  }

  public back(): void {
    this.store.dispatch(RouterActions.back());
  }

  public forward(): void {
    this.store.dispatch(RouterActions.forward());
  }
}
