import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraMobileLandingComponent } from './components/landing/extra-mobile-landing.component';
import { ExtraMobileLayoutComponent } from './components/layout/extra-mobile-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtraMobileLayoutComponent,
        data: { title: 'Extra', animation: 'extra' },
        children: [
          {
            path: '',
            component: ExtraMobileLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [ExtraMobileLayoutComponent, ExtraMobileLandingComponent],
})
export class ExtraMobileShellModule {}
