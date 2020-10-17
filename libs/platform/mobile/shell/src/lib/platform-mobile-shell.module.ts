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
import { PlatformMobileLayoutComponent } from './components/layout/platform-mobile-layout.component';

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
        component: PlatformMobileLayoutComponent,
        children: [
          {
            path: 'board',
            loadChildren: () => import('@slx/board-mobile-shell').then((module) => module.BoardShellMobileModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('@slx/settings-mobile-shell').then((module) => module.SettingsMobileShellModule),
          },
          {
            path: 'error-overview',
            loadChildren: () => import('@slx/extra-mobile-shell').then((module) => module.ExtraMobileShellModule),
          },
        ],
      },
    ]),
  ],
  declarations: [PlatformMobileLayoutComponent],
  exports: [PlatformMobileLayoutComponent],
})
export class PlatformMobileShellModule {}
