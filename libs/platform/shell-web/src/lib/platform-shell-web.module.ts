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
import { PlatformLayoutWebComponent } from './components/platform-layout-web/platform-layout-web.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('platformShellWeb', TranslocoHttpLoader),
    PlatformDomainModule,
    PlatformFeatureTopModule,
    PlatformFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlatformLayoutWebComponent,
        children: [
          {
            path: 'board',
            loadChildren: () => import('@slx/board-shell-web').then((module) => module.BoardShellWebModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('@slx/settings-shell-web').then((module) => module.SettingsShellWebModule),
          },
          {
            path: 'error-overview',
            loadChildren: () => import('@slx/extra-shell-web').then((module) => module.ExtraShellWebModule),
          },
        ],
      },
    ]),
  ],
  declarations: [PlatformLayoutWebComponent],
  exports: [PlatformLayoutWebComponent],
})
export class PlatformShellWebModule {}
