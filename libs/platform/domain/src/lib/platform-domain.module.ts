import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { BottomEffects } from './+bottom/bottom.effects';
import { bottomReducer } from './+bottom/bottom.reducer';
import { TopEffects } from './+top/top.effects';
import { topReducer } from './+top/top.reducer';
import { PLATFORM_FEATURE_BOTTOM, PLATFORM_FEATURE_TOP } from './platform.features';

@NgModule({
  imports: [
    StoreModule.forFeature(PLATFORM_FEATURE_TOP, topReducer),
    StoreModule.forFeature(PLATFORM_FEATURE_BOTTOM, bottomReducer),
    EffectsModule.forFeature([TopEffects, BottomEffects]),
  ],
  providers: [TopEffects, BottomEffects],
})
export class PlatformDomainModule {}
