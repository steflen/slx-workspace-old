import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardDomainModule } from '@slx/board-domain';
import { ExtraDomainModule } from '@slx/extra-domain';
import { HomeDomainModule } from '@slx/home-domain';
import { SettingsDomainModule } from '@slx/settings-domain';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { HomeWebLayoutComponent } from './components/layout/platform-web-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('platformShellWeb', TranslocoHttpLoader),
    HomeDomainModule,
    HomeFeatureTopModule,
    HomeFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeWebLayoutComponent,
        children: [
          {
            path: 'board',
            loadChildren: () => import('@slx/board-web-shell').then((module) => module.BoardWebShellModule),
          },
          {
            path: 'settings',
            loadChildren: () => import('@slx/settings-web-shell').then((module) => module.SettingsWebShellModule),
          },
          {
            path: 'error-overview',
            loadChildren: () => import('@slx/extra-web-shell').then((module) => module.ExtraWebShellModule),
          },
        ],
      },
    ]),
  ],
  declarations: [HomeWebLayoutComponent],
  exports: [HomeWebLayoutComponent],
})
export class HomeWebShellModule {}
