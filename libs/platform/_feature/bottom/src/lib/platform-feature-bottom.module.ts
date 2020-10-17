import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PLATFORM_FEATURE_BOTTOM } from '@slx/platform-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { PlatformFeatureBottomComponent } from './components/bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(PLATFORM_FEATURE_BOTTOM, TranslocoHttpLoader),
  ],
  declarations: [PlatformFeatureBottomComponent],
  exports: [PlatformFeatureBottomComponent],
})
export class PlatformFeatureBottomModule {}