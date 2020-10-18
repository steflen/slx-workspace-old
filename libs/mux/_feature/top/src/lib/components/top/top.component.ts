import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { NavigatorFacade } from '@slx/extra-domain';
import { MuxTopFacade } from '@slx/mux-domain';
import { MuxFeatureBottomComponent } from '@slx/mux-feature-bottom';

@Component({
  selector: 'slx-mux-feature-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class MuxFeatureTopComponent {
  isControlsOpened: boolean; // << now qnd, later store!

  constructor(
    private router: Router,
    private homeTopFacade: MuxTopFacade,
    private bottomSheet: MatBottomSheet,
    private navigatorFacade: NavigatorFacade,
  ) {}

  gotoBoard() {
    console.log('>>>>>>>>>>>>>>');
    console.log(this.router.config);
    this.navigatorFacade.goto({ commands: ['mux', { outlets: { bottom: ['board'] } }] });
    // this.navigatorFacade.goto({ commands: ['board', { outlet: { 'bottom-control': 'board' } }] });
    // this.navigatorFacade.outletBoard();
    // this.navigatorFacade.go('board', 'bottom-control', 'board');
  }

  gotoSettings() {
    this.navigatorFacade.goto({ commands: [{ outlets: { bottom: ['settings'] } }] });
    // this.navigatorFacade.outletSettings();
    // this.navigatorFacade.go('settings', 'bottom-control', 'settings');
  }

  gotoErrors() {
    this.navigatorFacade.goto({ commands: ['error-overview', { outlets: { bottom: ['else'] } }] });
    // this.navigatorFacade.go('board', 'bottom-control', '');
  }

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
