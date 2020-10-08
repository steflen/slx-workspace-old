import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { SharedModule } from '@slx/shared';
import { SharedMaterialModule } from '@slx/shared-material';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './components/board/board.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';

@NgModule({
  imports: [CommonModule, SharedModule, SharedMaterialModule, BoardRoutingModule],
  declarations: [DynamicGridComponent, BoardComponent],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
  ],
})
export class BoardModule {}
