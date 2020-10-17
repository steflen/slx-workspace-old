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

  // example 1)  this.navigatorFacade.goto({ commands: ['board'] });
  // usage 2) can also be used for outlet navigation, e.g:
  // [{ 'board', outlets: { 'bottom-control': 'board' } }]

  public goto(params: NavigationParams): void {
    this.store.dispatch(NavigatorActions.goto({ params }));
  }

  // public go(mainRoute: string, outletName: string, outletRoute: string) {
  //   const params: NavigationParams = {
  //     commands: [mainRoute, { outlets: { [outletName]: outletRoute }) }],
  //     extras: { relativeTo: this.route },
  //   };
  //   console.log('XXXXXXXXXXx');
  //   console.log(params);
  //   this.store.dispatch(NavigatorActions.goto({ params }));
  // }

  //    this.router.navigateByUrl('nested/(aux-nested:aux-nested)');

  // navigate a known outlet explicitly
  // usage only with known combinations for now !! these are
  // outletGoto({name:"bottom-control",route:"board"});
  // outletGoto({name:"bottom-control",route:"settings"});
  public outletBoard() {
    this.store.dispatch(NavigatorActions.outletBoard());
  }

  public outletSettings() {
    this.store.dispatch(NavigatorActions.outletSettings());
  }

  public back(): void {
    this.store.dispatch(NavigatorActions.back());
  }

  public forward(): void {
    this.store.dispatch(NavigatorActions.forward());
  }
}
