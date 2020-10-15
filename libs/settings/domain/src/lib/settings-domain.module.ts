import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN, WINDOW_PROVIDERS } from '@slx/shared-common';
import { LanguageEffects } from './+language/language.effects';
import { languageReducer } from './+language/language.reducer';
import { LocaleEffects } from './+locale/locale.effects';
import { localeReducer } from './+locale/locale.reducer';
import { LookAndFeelEffects } from './+look-and-feel/look-and-feel.effects';
import { lookAndFeelReducer } from './+look-and-feel/look-and-feel.reducer';
import { TimeAndDateEffects } from './+time-and-date/time-and-date.effects';
import { timeAndDateReducer } from './+time-and-date/time-and-date.reducer';
import { initSettingsDomain, SettingsDomainInitService } from './services/settings-domain-init.service';
import {
  SETTINGS_FEATURE_LANGUAGE,
  SETTINGS_FEATURE_LOCALE,
  SETTINGS_FEATURE_LOOK_AND_FEEL,
  SETTINGS_FEATURE_TIME_AND_DATE,
} from './settings.features';

@NgModule({
  imports: [
    StoreModule.forFeature(SETTINGS_FEATURE_LOOK_AND_FEEL, lookAndFeelReducer),
    StoreModule.forFeature(SETTINGS_FEATURE_LOCALE, localeReducer),
    StoreModule.forFeature(SETTINGS_FEATURE_LANGUAGE, languageReducer),
    StoreModule.forFeature(SETTINGS_FEATURE_TIME_AND_DATE, timeAndDateReducer),
    EffectsModule.forFeature([LookAndFeelEffects, LocaleEffects, LanguageEffects, TimeAndDateEffects]),
  ],
  providers: [
    LookAndFeelEffects,
    LocaleEffects,
    LanguageEffects,
    TimeAndDateEffects,
    SettingsDomainInitService,
    {
      provide: APP_INITIALIZER,
      deps: [SettingsDomainInitService],
      useFactory: initSettingsDomain,
      multi: true,
    },
  ],
})
export class SettingsDomainModule {
  constructor(@Optional() @SkipSelf() parentModule: SettingsDomainModule) {
    if (parentModule) {
      throw new Error('SettingsDomainModule is already loaded. Allowed only once! Import it in your AppModule only!');
    }
  }

  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: SettingsDomainModule,
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
