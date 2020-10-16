import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraLandingDesktopComponent } from './components/extra-landing-desktop/extra-landing-desktop.component';
import { ExtraLayoutDesktopComponent } from './components/extra-layout-desktop/extra-layout-desktop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtraLayoutDesktopComponent,
        data: { title: 'Extra', animation: 'extra' },
        children: [
          {
            path: '',
            component: ExtraLandingDesktopComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [ExtraLayoutDesktopComponent, ExtraLandingDesktopComponent],
})
export class ExtraShellDesktopModule {}
