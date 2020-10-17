import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { NavigatorFacade } from '@slx/extra-domain';
import { PlatformTopFacade } from '@slx/platform-domain';
import { PlatformFeatureBottomComponent } from '@slx/platform-feature-bottom';

@Component({
  selector: 'slx-platform-feature-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class PlatformFeatureTopComponent {
  isControlsOpened: boolean; // << now qnd, later store!

  constructor(
    private platformTopFacadeprivate: PlatformTopFacade,
    private bottomSheet: MatBottomSheet,
    private navigatorFacade: NavigatorFacade,
  ) {}

  gotoBoard() {
    this.navigatorFacade.goto({ path: ['board'] });
  }

  gotoErrors() {
    this.navigatorFacade.goto({ path: ['error-overview'] });
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
      this.bottomSheet.open(PlatformFeatureBottomComponent, {
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
