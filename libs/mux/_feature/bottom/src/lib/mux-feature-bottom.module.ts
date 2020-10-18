import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MUX_FEATURE_BOTTOM } from '@slx/mux-domain';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { MuxFeatureBottomComponent } from './components/bottom/bottom.component';
import { TestAtBoardComponent } from './components/test-at-board/test-at-board.component';
import { TestAtElseComponent } from './components/test-at-home/test-at-home.component';
import { TestAtSettingsComponent } from './components/test-at-settings/test-at-settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild(MUX_FEATURE_BOTTOM, TranslocoHttpLoader),
    RouterModule.forChild([
      {
        path: '',
        component: TestAtElseComponent,
        outlet: 'bottom',
      },
      {
        path: 'board',
        component: TestAtBoardComponent,
        outlet: 'bottom',
      },
      {
        path: 'settings',
        component: TestAtSettingsComponent,
        outlet: 'bottom',
      },
      // {
      //   path: '',
      //   component: TestAtElseComponent,
      //   outlet: 'bottom',
      // },
      // {
      //   path: 'board',
      //   component: TestAtBoardComponent,
      //   outlet: 'bottom',
      // },
      // {
      //   path: 'settings',
      //   component: TestAtSettingsComponent,
      //   outlet: 'bottom',
      // },
    ]),
  ],
  declarations: [MuxFeatureBottomComponent, TestAtSettingsComponent, TestAtElseComponent, TestAtBoardComponent],
  // entryComponents: [MuxFeatureBottomComponent],
  exports: [MuxFeatureBottomComponent],
})
export class MuxFeatureBottomModule {}
