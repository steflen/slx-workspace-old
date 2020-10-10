import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { SharedModule } from '@slx/shared';
import { SharedMaterialModule } from '@slx/shared-material';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { BoardRoutingModule } from './board-routing.module';
import { BOARD_FEATURE_KEY } from './board.feature-key';
import { BoardComponent } from './components/board/board.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    TranslationModule.forChild(BOARD_FEATURE_KEY, TranslocoHttpLoader),
    BoardRoutingModule,
  ],
  declarations: [DynamicGridComponent, BoardComponent],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
})
export class BoardModule {}
