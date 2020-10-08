import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ControlsComponent } from '../controls/controls.component';

@Component({
  selector: 'slx-board-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  constructor(private bottomSheet: MatBottomSheet) {}

  openControls(): void {
    this.bottomSheet.open(ControlsComponent);
  }
}
