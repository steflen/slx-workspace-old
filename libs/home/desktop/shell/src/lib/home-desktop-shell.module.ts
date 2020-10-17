import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardDomainModule } from '@slx/board-domain';
import { ExtraDomainModule } from '@slx/extra-domain';
import { PlatformDomainModule } from '@slx/home-domain';
import { PlatformFeatureBottomModule } from '@slx/home-feature-bottom';
import { PlatformFeatureTopModule } from '@slx/home-feature-top';
import { SettingsDomainModule } from '@slx/settings-domain';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { HomeDesktopLayoutComponent } from './components/layout/platform-desktop-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('platformDesktopShell', TranslocoHttpLoader),
    PlatformDomainModule,
    PlatformFeatureTopModule,
    PlatformFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeDesktopLayoutComponent,
        children: [
          {
            path: 'board',
            loadChildren: () => import('@slx/board-desktop-shell').then((module) => module.BoardDesktopShellModule),
          },
          {
            path: 'settings',
            loadChildren: () =>
              import('@slx/settings-desktop-shell').then((module) => module.SettingsDesktopShellModule),
          },
          {
            path: 'error-overview',
            loadChildren: () => import('@slx/extra-desktop-shell').then((module) => module.ExtraDesktopShellModule),
          },
        ],
      },
    ]),
  ],
  declarations: [HomeDesktopLayoutComponent],
  exports: [HomeDesktopLayoutComponent],
})
export class HomeDesktopShellModule {}
