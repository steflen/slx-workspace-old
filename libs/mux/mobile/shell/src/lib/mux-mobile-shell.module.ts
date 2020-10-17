import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardDomainModule } from '@slx/board-domain';
import { ExtraDomainModule } from '@slx/extra-domain';
import { MuxDomainModule } from '@slx/mux-domain';
import { MuxFeatureBottomModule } from '@slx/mux-feature-bottom';
import { MuxFeatureTopModule } from '@slx/mux-feature-top';
import { SettingsDomainModule } from '@slx/settings-domain';
import { SharedCommonModule } from '@slx/shared-common';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { MuxMobileLayoutComponent } from './components/layout/mux-mobile-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('homeShellMobile', TranslocoHttpLoader),
    MuxDomainModule,
    MuxFeatureTopModule,
    MuxFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: MuxMobileLayoutComponent,
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
  declarations: [MuxMobileLayoutComponent],
  exports: [MuxMobileLayoutComponent],
})
export class MuxMobileShellModule {}
