import { Inject, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import { LanguageEffects } from './+language/language.effects';
import { languageReducer } from './+language/language.reducer';
import { LocaleEffects } from './+locale/locale.effects';
import { localeReducer } from './+locale/locale.reducer';
import { LookAndFeelEffects } from './+look-and-feel/look-and-feel.effects';
import { lookAndFeelReducer } from './+look-and-feel/look-and-feel.reducer';
import { TimeAndDateEffects } from './+time-and-date/time-and-date.effects';
import { timeAndDateReducer } from './+time-and-date/time-and-date.reducer';
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
  providers: [LookAndFeelEffects, LocaleEffects, LanguageEffects, TimeAndDateEffects],
})
export class SettingsDomainModule {
  constructor(@Inject(ENVIRONMENT_TOKEN) private environment: Environment) {
    // console.log(this.environment);
  }
}
