import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardDomainModule } from '@slx/board-domain';
import { ExtraDomainModule } from '@slx/extra-domain';
import { PlatformDomainModule } from '@slx/platform-domain';
import { PlatformFeatureBottomModule } from '@slx/platform-feature-bottom';
import { PlatformFeatureTopModule } from '@slx/platform-feature-top';
import { SettingsDomainModule } from '@slx/settings-domain';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { PlatformLayoutDesktopComponent } from './components/platform-layout-desktop/platform-layout-desktop.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('platformShellDesktop', TranslocoHttpLoader),
    PlatformDomainModule,
    PlatformFeatureTopModule,
    PlatformFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlatformLayoutDesktopComponent,
        children: [
          {
            path: 'board',
            loadChildren: () => import('@slx/board-shell-desktop').then((module) => module.BoardShellDesktopModule),
          },
          {
            path: 'settings',
            loadChildren: () =>
              import('@slx/settings-shell-desktop').then((module) => module.SettingsShellDesktopModule),
          },
          {
            path: 'error-overview',
            loadChildren: () => import('@slx/extra-shell-desktop').then((module) => module.ExtraShellDesktopModule),
          },
        ],
      },
    ]),
  ],
  declarations: [PlatformLayoutDesktopComponent],
  exports: [PlatformLayoutDesktopComponent],
})
export class PlatformShellDesktopModule {}
