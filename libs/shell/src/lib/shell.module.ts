import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '@slx/authentication';
import { TranslationModule } from '@slx/translation';
import { ShellComponent } from './components/shell/shell.component';
// import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [CommonModule, TranslationModule, AuthenticationModule, RouterModule],
  declarations: [/*HeaderComponent,*/ ShellComponent],
  exports: [ShellComponent],
})
export class ShellModule {}
