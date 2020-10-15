import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { SettingsFeatureShellComponent } from './components/settings-feature-shell/settings-shell.component';

@NgModule({
  declarations: [SettingsFeatureShellComponent],
  imports: [CommonModule, SharedTranslationModule.forChild('settingsShell', TranslocoHttpLoader), RouterModule],
  exports: [SettingsFeatureShellComponent],
})
export class SettingsFeatureShellModule {}
