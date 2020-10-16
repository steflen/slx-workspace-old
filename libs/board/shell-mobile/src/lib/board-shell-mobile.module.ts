import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardLandingMobileComponent } from './components/board-landing-mobile/board-landing-mobile.component';
import { BoardLayoutMobileComponent } from './components/board-layout-mobile/board-layout-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardLayoutMobileComponent,
        data: { title: 'Board', animation: 'board' },
        children: [
          {
            path: '',
            component: BoardLandingMobileComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [BoardLayoutMobileComponent, BoardLandingMobileComponent],
})
export class BoardShellMobileModule {}
