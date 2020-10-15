import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GLUE_FEATURE_SHELL } from '@slx/glue-domain';
import { GlueFeatureBottomModule } from '@slx/glue-feature-bottom';
import { GlueFeatureTopModule } from '@slx/glue-feature-top';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { GlueFeatureShellComponent } from './components/shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(GLUE_FEATURE_SHELL, TranslocoHttpLoader),
    GlueFeatureTopModule,
    GlueFeatureBottomModule,
    RouterModule,
  ],
  declarations: [GlueFeatureShellComponent],
})
export class GlueFeatureShellModule {}
