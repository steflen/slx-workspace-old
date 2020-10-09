import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@slx/shared';
import { SharedMaterialModule } from '@slx/shared-material';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { NightModeSetupComponent } from './components/night-mode-setup/night-mode-setup.component';
import { SettingsComponent } from './components/settings/settings.component';
import { initSettings, SettingsInitService } from './services/settings-init.service';
import { SettingsRoutingModule } from './settings-routing.module';
import { SETTINGS_FEATURE_KEY } from './settings.feature-key';
import { SettingsEffects } from './store/settings.effects';
import { reducer } from './store/settings.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    SharedMaterialModule,
    TranslationModule.forChild(SETTINGS_FEATURE_KEY, TranslocoHttpLoader),
    StoreModule.forFeature(SETTINGS_FEATURE_KEY, reducer),
    EffectsModule.forFeature([SettingsEffects]),
    SettingsRoutingModule,
  ],
  declarations: [SettingsComponent, NightModeSetupComponent],
  providers: [
    SettingsEffects,
    SettingsInitService,
    {
      provide: APP_INITIALIZER,
      deps: [SettingsInitService],
      useFactory: initSettings,
      multi: true,
    },
  ],
})
export class SettingsModule {}
