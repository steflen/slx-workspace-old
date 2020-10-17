import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraWebLandingComponent } from './components/landing/extra-web-landing.component';
import { ExtraWebLayoutComponent } from './components/layout/extra-web-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtraWebLayoutComponent,
        data: { title: 'Extra', animation: 'extra' },
        children: [
          {
            path: '',
            component: ExtraWebLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [ExtraWebLayoutComponent, ExtraWebLandingComponent],
})
export class ExtraWebShellModule {}
