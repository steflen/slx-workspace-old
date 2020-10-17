import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MUX_FEATURE_BOTTOM } from '@slx/mux-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { MuxFeatureBottomComponent } from './components/bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(MUX_FEATURE_BOTTOM, TranslocoHttpLoader),
  ],
  declarations: [MuxFeatureBottomComponent],
  exports: [MuxFeatureBottomComponent],
})
export class MuxFeatureBottomModule {}
