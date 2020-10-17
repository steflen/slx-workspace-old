import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ErrorOverviewEffects } from './+error-overview/error-overview.effects';
import { errorOverviewReducer } from './+error-overview/error-overview.reducer';
import { NavigatorEffects } from './+navigator/navigator.effects';
import { EXTRA_FEATURE_ERROR, EXTRA_FEATURE_NAVIGATOR } from './extra.features';

@NgModule({
  imports: [
    StoreModule.forFeature(EXTRA_FEATURE_ERROR, errorOverviewReducer),
    StoreModule.forFeature(EXTRA_FEATURE_NAVIGATOR, routerReducer),
    EffectsModule.forFeature([ErrorOverviewEffects, NavigatorEffects]),
  ],
})
export class ExtraDomainModule {}
