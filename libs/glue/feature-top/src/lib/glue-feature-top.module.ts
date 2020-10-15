import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GLUE_FEATURE_TOP } from '@slx/glue-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { GlueFeatureTopComponent } from './components/top/top.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(GLUE_FEATURE_TOP, TranslocoHttpLoader),
  ],
  declarations: [GlueFeatureTopComponent],
  exports: [GlueFeatureTopComponent],
})
export class GlueFeatureTopModule {}
