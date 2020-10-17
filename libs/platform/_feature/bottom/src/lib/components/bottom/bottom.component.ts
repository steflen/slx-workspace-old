import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { PlatformBottomFacade } from '@slx/platform-domain';

@Component({
  selector: 'slx-platform-feature-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class PlatformFeatureBottomComponent {
  constructor(
    private platformBottomFacade: PlatformBottomFacade,
    private bottomSheetRef: MatBottomSheetRef<PlatformFeatureBottomComponent>,
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
