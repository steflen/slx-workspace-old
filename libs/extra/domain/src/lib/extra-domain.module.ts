import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ErrorEffects } from './+error/error.effects';
import { errorReducer } from './+error/error.reducer';
import { NavigatorEffects } from './+navigator/navigator.effects';
import { EXTRA_FEATURE_ERROR, EXTRA_FEATURE_NAVIGATOR } from './extra.feature-keys';

@NgModule({
  imports: [
    StoreModule.forFeature(EXTRA_FEATURE_ERROR, errorReducer),
    StoreModule.forFeature(EXTRA_FEATURE_NAVIGATOR, routerReducer),
    EffectsModule.forFeature([ErrorEffects, NavigatorEffects]),
  ],
})
export class ExtraDomainModule {}
