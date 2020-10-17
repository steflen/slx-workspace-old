import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Environment, ENVIRONMENT_TOKEN, SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { SettingsWebLandingComponent } from './components/landing/settings-web-landing.component';
import { SettingsWebLayoutComponent } from './components/layout/settings-web-layout.component';

@NgModule({
  declarations: [SettingsWebLayoutComponent, SettingsWebLandingComponent],
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('settingsShell', TranslocoHttpLoader),
    // SettingsDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsWebLayoutComponent,
        data: { title: 'Settings', animation: 'settings' },
        children: [
          {
            path: '',
            component: SettingsWebLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
          {
            path: 'time-and-date',
            loadChildren: () =>
              import('@slx/settings-feature-time-and-date').then((m) => m.SettingsFeatureTimeAndDateModule),
            data: { title: 'Time And Date', animation: 'time-and-date' },
          },
          {
            path: 'look-and-feel',
            loadChildren: () =>
              import('@slx/settings-feature-look-and-feel').then((m) => m.SettingsFeatureLookAndFeelModule),
            data: { title: 'Look And Feel', animation: 'look-and-feel' },
          },
          {
            path: 'locale',
            loadChildren: () => import('@slx/settings-feature-locale').then((m) => m.SettingsFeatureLocaleModule),
            data: { title: 'Locale', animation: 'locale' },
          },
          {
            path: 'language',
            loadChildren: () => import('@slx/settings-feature-language').then((m) => m.SettingsFeatureLanguageModule),
            data: { title: 'Language', animation: 'language' },
          },
        ],
      },
    ]),
  ],
})
export class SettingsWebShellModule {
  constructor(@Optional() @SkipSelf() parentModule: SettingsWebShellModule) {
    if (parentModule) {
      throw new Error('SettingsWebShellModule is already loaded!');
    }
  }

  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: SettingsWebShellModule,
      providers: [
        {
          provide: ENVIRONMENT_TOKEN,
          useValue: environment,
        },
      ],
    };
  }
}
