import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '@slx/authentication';
import { SharedMaterialModule } from '@slx/shared-material';
import { TranslationModule } from '@slx/translation';
import { ControlsComponent } from './components/controls/controls.component';
import { ShellComponent } from './components/shell/shell.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  imports: [CommonModule, SharedMaterialModule, TranslationModule, AuthenticationModule, RouterModule],
  declarations: [TopBarComponent, ControlsComponent, ShellComponent],
  entryComponents: [ControlsComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
