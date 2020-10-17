import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LookAndFeelComponent } from './components/look-and-feel/look-and-feel.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LookAndFeelComponent,
      },
    ]),
  ],
  declarations: [LookAndFeelComponent],
})
export class SettingsFeatureLookAndFeelModule {}
