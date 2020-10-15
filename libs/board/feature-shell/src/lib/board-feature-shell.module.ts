import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardDomainModule } from '@slx/board-domain';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { BOARD_FEATURE_SHELL } from '../../../domain/src/lib/board.features';
import { BoardRoutingModule } from './board-routing.module';
import { BoardFeatureShellComponent } from './components/shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(BOARD_FEATURE_SHELL, TranslocoHttpLoader),
    BoardDomainModule,
    BoardRoutingModule,
  ],
  declarations: [BoardFeatureShellComponent],
})
export class BoardFeatureShellModule {}
