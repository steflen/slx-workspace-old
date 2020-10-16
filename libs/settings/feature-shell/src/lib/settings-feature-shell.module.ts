import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SettingsDomainModule } from '@slx/settings-domain';
import { Environment, ENVIRONMENT_TOKEN, SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { SettingsFeatureShellComponent } from './components/settings-feature-shell/settings-shell.component';

@NgModule({
  declarations: [SettingsFeatureShellComponent],
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('settingsShell', TranslocoHttpLoader),
    SettingsDomainModule,
    SettingsRoutingModule,
  ],
  exports: [SettingsFeatureShellComponent],
})
export class SettingsFeatureShellModule {
  constructor(@Optional() @SkipSelf() parentModule: SettingsDomainModule) {
    if (parentModule) {
      throw new Error('SettingsDomainModule is already loaded. Allowed only once! Import it in your AppModule only!');
    }
  }
  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: SettingsDomainModule,
      providers: [
        {
          provide: ENVIRONMENT_TOKEN,
          useValue: environment,
        },
      ],
    };
  }
}
