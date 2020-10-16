import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardDomainModule } from '@slx/board-domain';
import { BoardFeatureDynaGridModule } from '@slx/board-feature-dyna-grid';
import { BoardFeatureHoverlayModule } from '@slx/board-feature-hoverlay';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { BoardFeatureContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('boardFeatureContainer', TranslocoHttpLoader),
    BoardDomainModule,
    BoardFeatureDynaGridModule,
    BoardFeatureHoverlayModule,
  ],
  declarations: [BoardFeatureContainerComponent],
})
export class BoardFeatureContainerModule {}
