import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GLUE_FEATURE_BOTTOM } from '@slx/glue-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { GlueFeatureBottomComponent } from './components/bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(GLUE_FEATURE_BOTTOM, TranslocoHttpLoader),
  ],
  declarations: [GlueFeatureBottomComponent],
  exports: [GlueFeatureBottomComponent],
})
export class GlueFeatureBottomModule {}
