import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PLATFORM_FEATURE_TOP } from '@slx/platform-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { PlatformFeatureTopComponent } from './components/top/top.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(PLATFORM_FEATURE_TOP, TranslocoHttpLoader),
  ],
  declarations: [PlatformFeatureTopComponent],
  exports: [PlatformFeatureTopComponent],
})
export class PlatformFeatureTopModule {}
