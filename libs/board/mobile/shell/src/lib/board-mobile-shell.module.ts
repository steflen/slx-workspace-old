import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardMobileLandingComponent } from './components/landing/board-mobile-landing.component';
import { BoardMobileLayoutComponent } from './components/layout/board-mobile-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardMobileLayoutComponent,
        data: { title: 'Board', animation: 'board' },
        children: [
          {
            path: '',
            component: BoardMobileLandingComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [BoardMobileLayoutComponent, BoardMobileLandingComponent],
})
export class BoardShellMobileModule {}
