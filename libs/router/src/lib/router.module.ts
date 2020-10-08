import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { RouterSerializer } from './helpers/router.serializer';
import { ROUTER_FEATURE_KEY } from './router.feature-key';
import { RouterEffects } from './store/router.effects';

@NgModule({
  imports: [
    CommonModule,
    TranslationModule.forChild(ROUTER_FEATURE_KEY, TranslocoHttpLoader),
    StoreModule.forFeature(ROUTER_FEATURE_KEY, routerReducer),
    EffectsModule.forFeature([RouterEffects]),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
      // We rely the action to be dispatched after guards and resolvers successfully
      // By default NavigationActionTiming.PreActivation which means that actions will be dispatched before any guards or resolvers run
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
  ],
  providers: [RouterEffects],
})
export class RouterModule {}
