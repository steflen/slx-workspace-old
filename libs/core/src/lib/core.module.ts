import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { NavigationActionTiming, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN, WINDOW_PROVIDERS } from '@slx/shared-common';
import { buildSpecificModules } from './build-specifics';
import { metaReducers } from './meta';
import { RouterSerializer } from './meta/router.serializer';
import { CoreInitService, initCore } from './services/core-init.service';
import { HttpConfigService, initHttpConfig } from './services/http-config.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    //SharedCommonModule,
    // CORE ROOT STORE
    StoreModule.forRoot(
      {},
      {
        metaReducers,
        runtimeChecks: {
          strictActionImmutability: true,
          strictActionSerializability: false,
          strictStateImmutability: true,
          strictStateSerializability: false,
        },
      },
    ),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterSerializer,
      navigationActionTiming: NavigationActionTiming.PostActivation,
    }),
    buildSpecificModules,
  ],
  exports: [
    /*SharedCommonModule*/
  ],
  providers: [
    WINDOW_PROVIDERS,
    {
      provide: APP_INITIALIZER,
      deps: [CoreInitService],
      useFactory: initCore,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initHttpConfig,
      deps: [HttpConfigService],
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in your AppModule only!');
    }
  }

  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: CoreModule,
      providers: [
        WINDOW_PROVIDERS,
        {
          provide: ENVIRONMENT_TOKEN,
          useValue: environment,
        },
      ],
    };
  }
}
