import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardWebLandingComponent } from './components/landing/board-web-landing.component';
import { BoardWebLayoutComponent } from './components/layout/board-web-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardWebLayoutComponent,
        data: { title: 'Board', animation: 'board' },
        children: [
          {
            path: '',
            component: BoardWebLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [BoardWebLayoutComponent, BoardWebLandingComponent],
})
export class BoardWebShellModule {}
