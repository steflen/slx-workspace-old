import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseRouterStoreState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { NavigationParams } from '@slx/shared-common';
import * as NavigatorActions from '../+navigator/navigator.actions';

@Injectable({
  providedIn: 'root',
})
export class NavigatorFacade {
  constructor(private route: ActivatedRoute, private store: Store<BaseRouterStoreState>) {}

  public goto(params: NavigationParams): void {
    this.store.dispatch(NavigatorActions.goto({ params }));
  }

  public outletBottomBoard() {
    this.store.dispatch(NavigatorActions.outletBottomBoard());
  }

  public outletBottomSettings() {
    this.store.dispatch(NavigatorActions.outletBottomSettings());
  }

  public outletClose(route: string) {
    this.store.dispatch(NavigatorActions.outletClose({ route }));
  }

  public back(): void {
    this.store.dispatch(NavigatorActions.back());
  }

  public forward(): void {
    this.store.dispatch(NavigatorActions.forward());
  }
}
