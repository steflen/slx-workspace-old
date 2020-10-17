import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HOME_FEATURE_TOP } from '@slx/home-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { PlatformFeatureTopComponent } from './components/top/top.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(HOME_FEATURE_TOP, TranslocoHttpLoader),
  ],
  declarations: [PlatformFeatureTopComponent],
  exports: [PlatformFeatureTopComponent],
})
export class HomeFeatureTopModule {}
