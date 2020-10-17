import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageComponent } from './web/language/language.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LanguageComponent,
      },
    ]),
  ],
  declarations: [LanguageComponent],
})
export class SettingsFeatureLanguageModule {}
