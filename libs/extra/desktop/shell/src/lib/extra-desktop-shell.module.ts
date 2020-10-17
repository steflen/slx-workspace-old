import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ExtraDesktopLandingComponent } from './components/landing/extra-desktop-landing.component';
import { ExtraDesktopLayoutComponent } from './components/layout/extra-desktop-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ExtraDesktopLayoutComponent,
        data: { title: 'Extra', animation: 'extra' },
        children: [
          {
            path: '',
            component: ExtraDesktopLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [ExtraDesktopLayoutComponent, ExtraDesktopLandingComponent],
})
export class ExtraDesktopShellModule {}
