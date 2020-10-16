import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraDomainModule, EXTRA_FEATURE_SHELL } from '@slx/extra-domain';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { ExtraFeatureShellComponent } from './components/shell/shell.component';
import { ExtraRoutingModule } from './extra-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(EXTRA_FEATURE_SHELL, TranslocoHttpLoader),
    ExtraDomainModule,
    ExtraRoutingModule,
  ],
  declarations: [ExtraFeatureShellComponent],
})
export class ExtraFeatureShellModule {}
