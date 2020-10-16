import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardLandingDesktopComponent } from './components/board-landing-desktop/board-landing-desktop.component';
import { BoardLayoutDesktopComponent } from './components/board-layout-desktop/board-layout-desktop.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardLayoutDesktopComponent,
        data: { title: 'Board', animation: 'board' },
        children: [
          {
            path: '',
            component: BoardLandingDesktopComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [BoardLayoutDesktopComponent, BoardLandingDesktopComponent],
})
export class BoardShellDesktopModule {}
