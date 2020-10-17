import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MuxBottomFacade } from '@slx/mux-domain';

@Component({
  selector: 'slx-mux-feature-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class MuxFeatureBottomComponent {
  constructor(
    private homeBottomFacade: MuxBottomFacade,
    private bottomSheetRef: MatBottomSheetRef<MuxFeatureBottomComponent>,
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
