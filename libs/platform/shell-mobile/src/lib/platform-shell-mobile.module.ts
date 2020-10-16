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
import { PlatformLayoutMobileComponent } from './components/platform-layout-mobile/platform-layout-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('platformShellMobile', TranslocoHttpLoader),
    PlatformDomainModule,
    PlatformFeatureTopModule,
    PlatformFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: PlatformLayoutMobileComponent,
        children: [
          {
            path: 'board',
            loadChildren: () => import('@slx/board-shell-mobile').then((module) => module.BoardShellMobileModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('@slx/settings-shell-mobile').then((module) => module.SettingsShellMobileModule),
          },
          {
            path: 'error-overview',
            loadChildren: () => import('@slx/extra-shell-mobile').then((module) => module.ExtraShellMobileModule),
          },
        ],
      },
    ]),
  ],
  declarations: [PlatformLayoutMobileComponent],
  exports: [PlatformLayoutMobileComponent],
})
export class PlatformShellMobileModule {}
