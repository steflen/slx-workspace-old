import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Store } from '@ngrx/store';
import { MuxFeatureBottomComponent } from '@slx/mux-feature-bottom';

@Injectable({
  providedIn: 'root',
})
export class MuxBottomFacade {
  constructor(private store: Store, private bottomSheet: MatBottomSheet) {}

  openControls(): void {
    // https://material.angular.io/components/bottom-sheet/api
    console.log('OPEN BOTTOM');
    console.log(this.bottomSheet);
    if (this.isControlsOpened) {
      this.bottomSheet.dismiss();
      this.isControlsOpened = false;
    } else {
      this.isControlsOpened = true;
      // todo make this happen over an NGRX ACTION instead of a import dependency
      this.bottomSheet.open(MuxFeatureBottomComponent, {
        ariaLabel: 'Control',
        autoFocus: true,
        hasBackdrop: false,
        closeOnNavigation: false,
        restoreFocus: true,
        // direction: 'ltr', //"rtl"
        // panelClass: 'slx-board-control-panel',
        data: {},
        disableClose: true,
      });
    }
  }
}
