import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RouterFacade } from '@slx/router';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'slx-shell-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  isControlsOpened: boolean; // << now qnd, later store!

  constructor(private bottomSheet: MatBottomSheet, private routerFacade: RouterFacade) {}

  gotoBoard() {
    this.routerFacade.goto({ path: ['board'] });
  }
  gotoErrors() {
    this.routerFacade.goto({ path: ['errors'] });
  }
  gotoSettings() {
    this.routerFacade.goto({ path: ['settings'] });
  }
  openControls(): void {
    // https://material.angular.io/components/bottom-sheet/api

    if (this.isControlsOpened) {
      this.bottomSheet.dismiss();
      this.isControlsOpened = false;
    } else {
      this.isControlsOpened = true;
      this.bottomSheet.open(ControlsComponent, {
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
