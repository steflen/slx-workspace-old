import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MUX_FEATURE_TOP } from '@slx/mux-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { MuxFeatureTopComponent } from './components/top/top.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(MUX_FEATURE_TOP, TranslocoHttpLoader),
    RouterModule,
  ],
  declarations: [MuxFeatureTopComponent],
  exports: [MuxFeatureTopComponent],
})
export class MuxFeatureTopModule {}
