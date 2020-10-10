import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '@slx/authentication';
import { SharedMaterialModule } from '@slx/shared-material';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { ControlsComponent } from './components/controls/controls.component';
import { ShellComponent } from './components/shell/shell.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SHELL_FEATURE_KEY } from './shell.feature-key';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    TranslationModule.forChild(SHELL_FEATURE_KEY, TranslocoHttpLoader),
    AuthenticationModule,
    RouterModule,
  ],
  declarations: [TopBarComponent, ControlsComponent, ShellComponent],
  entryComponents: [ControlsComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
