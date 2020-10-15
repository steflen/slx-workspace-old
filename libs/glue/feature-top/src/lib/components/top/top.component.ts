import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavigatorFacade } from '@slx/extra-domain';
import { GlueTopFacade } from '@slx/glue-domain';
import { GlueFeatureBottomComponent } from '../../../../../feature-bottom/src/lib/components/bottom/bottom.component';

@Component({
  selector: 'slx-glue-feature-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class GlueFeatureTopComponent {
  isControlsOpened: boolean; // << now qnd, later store!

  constructor(
    private glueTopFacadeprivate: GlueTopFacade,
    private bottomSheet: MatBottomSheet,
    private navigatorFacade: NavigatorFacade,
  ) {}

  gotoBoard() {
    this.navigatorFacade.goto({ path: ['board'] });
  }

  gotoErrors() {
    this.navigatorFacade.goto({ path: ['errors'] });
  }

  gotoSettings() {
    this.navigatorFacade.goto({ path: ['settings'] });
  }

  openControls(): void {
    // https://material.angular.io/components/bottom-sheet/api

    if (this.isControlsOpened) {
      this.bottomSheet.dismiss();
      this.isControlsOpened = false;
    } else {
      this.isControlsOpened = true;
      // todo make this happen over an NGRX ACTION instead of a import dependency
      this.bottomSheet.open(GlueFeatureBottomComponent, {
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
