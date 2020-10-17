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
import { MuxWebLayoutComponent } from './components/layout/mux-web-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('homeShellWeb', TranslocoHttpLoader),

    // Important! Load all the domains and initialize reactive state
    MuxDomainModule,
    ExtraDomainModule,
    SettingsDomainModule,
    BoardDomainModule,

    // Load Modules for Outer Layout
    MuxFeatureTopModule,
    MuxFeatureBottomModule,

    // Load Layout Eagerly, Load Content Lazyly
    RouterModule.forChild([
      {
        path: '',
        component: MuxWebLayoutComponent,
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
  declarations: [MuxWebLayoutComponent],
  exports: [MuxWebLayoutComponent],
})
export class MuxWebShellModule {}
