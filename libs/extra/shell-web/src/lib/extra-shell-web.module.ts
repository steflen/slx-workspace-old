import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraLandingWebComponent } from './components/extra-landing-web/extra-landing-web.component';
import { ExtraLayoutWebComponent } from './components/extra-layout-web/extra-layout-web.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtraLayoutWebComponent,
        data: { title: 'Extra', animation: 'extra' },
        children: [
          {
            path: '',
            component: ExtraLandingWebComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [ExtraLayoutWebComponent, ExtraLandingWebComponent],
})
export class ExtraShellWebModule {}
