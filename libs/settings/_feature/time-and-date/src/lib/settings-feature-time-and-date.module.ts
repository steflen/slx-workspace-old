import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TimeAndDateComponent } from './components/time-and-date/time-and-date.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TimeAndDateComponent,
      },
    ]),
  ],
  declarations: [TimeAndDateComponent],
})
export class SettingsFeatureTimeAndDateModule {}
