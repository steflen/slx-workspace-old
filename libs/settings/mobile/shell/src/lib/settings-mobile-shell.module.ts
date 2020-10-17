import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Environment, ENVIRONMENT_TOKEN, SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { SettingsMobileLandingComponent } from './components/landing/settings-mobile-landing.component';
import { SettingsMobileLayoutComponent } from './components/layout/settings-mobile-layout.component';

@NgModule({
  declarations: [SettingsMobileLayoutComponent, SettingsMobileLandingComponent],
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('settingsShell', TranslocoHttpLoader),
    // SettingsDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: SettingsMobileLayoutComponent,
        data: { title: 'Settings', animation: 'settings' },
        children: [
          {
            path: '',
            component: SettingsMobileLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
          {
            path: 'time-and-date',
            loadChildren: () =>
              import('@slx/settings-feature-time-and-date').then((m) => m.SettingsFeatureTimeAndDateModule),
            data: { title: 'Blog', animation: 'blog' },
          },
          {
            path: 'look-and-feel',
            loadChildren: () =>
              import('@slx/settings-feature-look-and-feel').then((m) => m.SettingsFeatureLookAndFeelModule),
            data: { title: 'Blog', animation: 'blog' },
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
export class SettingsMobileShellModule {
  constructor(@Optional() @SkipSelf() parentModule: SettingsMobileShellModule) {
    if (parentModule) {
      throw new Error('SettingsDomainModule is already loaded. Allowed only once! Import it in your AppModule only!');
    }
  }

  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: SettingsMobileShellModule,
      providers: [
        {
          provide: ENVIRONMENT_TOKEN,
          useValue: environment,
        },
      ],
    };
  }
}
