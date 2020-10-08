import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SETTINGS_FEATURE_KEY } from './settings.feature-key';
import { SettingsEffects } from './store/settings.effects';
import { reducer } from './store/settings.reducer';

@NgModule({
  imports: [
    TranslationModule.forChild(SETTINGS_FEATURE_KEY, TranslocoHttpLoader),
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([SettingsEffects]),
    SettingsRoutingModule,
  ],
  providers: [SettingsEffects],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
