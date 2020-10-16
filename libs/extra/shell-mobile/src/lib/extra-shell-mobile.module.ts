import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraLandingMobileComponent } from './components/extra-landing-mobile/extra-landing-mobile.component';
import { ExtraLayoutMobileComponent } from './components/extra-layout-mobile/extra-layout-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtraLayoutMobileComponent,
        data: { title: 'Extra', animation: 'extra' },
        children: [
          {
            path: '',
            component: ExtraLandingMobileComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [ExtraLayoutMobileComponent, ExtraLandingMobileComponent],
})
export class ExtraShellMobileModule {}
