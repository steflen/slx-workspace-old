import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraDomainModule } from '@slx/extra-domain';
import { ExtraFeatureShellComponent } from './components/shell/shell.component';

@NgModule({
  imports: [CommonModule, ExtraDomainModule],
  declarations: [ExtraFeatureShellComponent],
})
export class ExtraFeatureShellModule {}
