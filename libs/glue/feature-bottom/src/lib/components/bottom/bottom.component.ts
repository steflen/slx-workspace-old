import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { GlueBottomFacade } from '@slx/glue-domain';

@Component({
  selector: 'slx-glue-feature-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss'],
})
export class GlueFeatureBottomComponent {
  constructor(
    private glueBottomFacade: GlueBottomFacade,
    private bottomSheetRef: MatBottomSheetRef<GlueFeatureBottomComponent>,
  ) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
