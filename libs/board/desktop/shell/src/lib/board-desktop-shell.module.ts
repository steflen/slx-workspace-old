import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardDesktopLandingComponent } from './components/landing/board-desktop-landing.component';
import { BoardDesktopLayoutComponent } from './components/layout/board-desktop-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardDesktopLayoutComponent,
        data: { title: 'Board', animation: 'board' },
        children: [
          {
            path: '',
            component: BoardDesktopLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [BoardDesktopLayoutComponent, BoardDesktopLandingComponent],
})
export class BoardDesktopShellModule {}
