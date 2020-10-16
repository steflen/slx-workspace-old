import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DynaGridEffects } from './+dyna-grid/dyna-grid.effects.';
import { dynaGridReducer } from './+dyna-grid/dyna-grid.reducer';
import { HoverlayEffects } from './+hoverlay/hoverlay.effects';
import { hoverlayReducer } from './+hoverlay/hoverlay.reducer';
import { BOARD_FEATURE_DYNA_GRID, BOARD_FEATURE_HOVERLAY } from './board.features';

@NgModule({
  imports: [
    StoreModule.forFeature(BOARD_FEATURE_DYNA_GRID, dynaGridReducer),
    StoreModule.forFeature(BOARD_FEATURE_HOVERLAY, hoverlayReducer),
    EffectsModule.forFeature([DynaGridEffects, HoverlayEffects]),
  ],
  providers: [DynaGridEffects, HoverlayEffects],
})
export class BoardDomainModule {}
