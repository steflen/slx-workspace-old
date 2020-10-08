import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@slx/shared';
import { BoardRoutingModule } from './board-routing.module';
import { BoardComponent } from './components/board/board.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  imports: [CommonModule, SharedModule, BoardRoutingModule],
  declarations: [DynamicGridComponent, BoardComponent, ControlsComponent, TopBarComponent],
  entryComponents: [ControlsComponent],
})
export class BoardModule {}
