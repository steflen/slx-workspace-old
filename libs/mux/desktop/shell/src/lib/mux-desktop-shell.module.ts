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
import { MuxDesktopLayoutComponent } from './components/layout/mux-desktop-layout.component';

@NgModule({
  imports: [
    CommonModule,
    SharedCommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('homeDesktopShell', TranslocoHttpLoader),
    MuxDomainModule,
    MuxFeatureTopModule,
    MuxFeatureBottomModule,
    BoardDomainModule,
    SettingsDomainModule,
    ExtraDomainModule,
    RouterModule.forChild([
      {
        path: '',
        component: MuxDesktopLayoutComponent,
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
  declarations: [MuxDesktopLayoutComponent],
  exports: [MuxDesktopLayoutComponent],
})
export class MuxDesktopShellModule {}
