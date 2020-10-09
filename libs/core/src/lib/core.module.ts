import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorModule } from '@slx/error';
import { RouterModule } from '@slx/router';
import { SharedModule } from '@slx/shared';
import { CustomIconService } from '@slx/shared-material';
import { buildSpecificModules } from './build-specifics';
import { metaReducers } from './helpers';
import { Environment, ENVIRONMENT_TOKEN } from './interfaces/environment.interface';
import { WINDOW_PROVIDERS } from './interfaces/window.interface';
import { CoreInitializerService, initCore } from './services/core-init.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers,
        runtimeChecks: {
          // https://ngrx.io/guide/store/configuration/runtime-checks
          strictActionImmutability: true,
          strictActionSerializability: false,
          strictStateImmutability: true,
          strictStateSerializability: false,
        },
      },
    ),
    buildSpecificModules,
    EffectsModule.forRoot([]),
    RouterModule,
    ErrorModule,
  ],
  exports: [SharedModule],
  providers: [
    // https://dzone.com/articles/how-to-use-the-app-initializer-token-to-hook-into
    WINDOW_PROVIDERS,
    CoreInitializerService,
    {
      provide: APP_INITIALIZER,
      deps: [CoreInitializerService],
      useFactory: initCore,
      multi: true,
    },
    // mat custom icon service is not provided in shared module as shared modules are service-free
    CustomIconService,
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
