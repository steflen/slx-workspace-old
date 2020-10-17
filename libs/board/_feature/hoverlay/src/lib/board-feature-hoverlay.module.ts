import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { HoverlayComponent } from './components/hoverlay/hoverlay.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('boardFeatureHoverlay', TranslocoHttpLoader),
  ],
  declarations: [HoverlayComponent],
  exports: [HoverlayComponent],
})
export class BoardFeatureHoverlayModule {}
