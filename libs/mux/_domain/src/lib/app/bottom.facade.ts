import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
// import { MuxFeatureBottomComponent } from '@slx/mux-feature-bottom';
import * as BottomActions from '../+bottom/bottom.actions';

@Injectable({
  providedIn: 'root',
})
export class MuxBottomFacade {
  constructor(private store: Store) {}

  toggleBottom() {
    this.store.dispatch(BottomActions.toggleBottom());
  }

  openBottom() {
    this.store.dispatch(BottomActions.tryOpenBottom());
  }

  closeBottom() {
    this.store.dispatch(BottomActions.tryCloseBottom());
  }

  // openControls(): void {
  //   // https://material.angular.io/components/bottom-sheet/api
  //   console.log('OPEN BOTTOM');
  //   console.log(this.bottomSheet);
  //   if (this.isControlsOpened) {
  //     this.bottomSheet.dismiss();
  //     this.isControlsOpened = false;
  //   } else {
  //     this.isControlsOpened = true;
  //     // todo make this happen over an NGRX ACTION instead of a import dependency
  //     this.bottomSheet.open(MuxFeatureBottomComponent, {
  //       ariaLabel: 'Control',
  //       autoFocus: true,
  //       hasBackdrop: false,
  //       closeOnNavigation: false,
  //       restoreFocus: true,
  //       // direction: 'ltr', //"rtl"
  //       // panelClass: 'slx-board-control-panel',
  //       data: {},
  //       disableClose: true,
  //     });
  //   }
  // }
}
