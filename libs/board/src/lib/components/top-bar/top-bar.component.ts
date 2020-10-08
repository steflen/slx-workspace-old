import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'slx-board-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  isControlsOpened: boolean; // << now qnd, later store!

  constructor(private bottomSheet: MatBottomSheet) {}

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
        closeOnNavigation: true,
        restoreFocus: true,
        // direction: 'ltr', //"rtl"
        // panelClass: 'control-panel',
        data: {},
        disableClose: true,
      });
    }
  }
}
