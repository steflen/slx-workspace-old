import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardLandingWebComponent } from './components/board-landing-web/board-landing-web.component';
import { BoardLayoutWebComponent } from './components/board-layout-web/board-layout-web.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BoardLayoutWebComponent,
        data: { title: 'Board', animation: 'board' },
        children: [
          {
            path: '',
            component: BoardLandingWebComponent,
            data: { title: 'Landing', animation: 'landing' },
          },
        ],
      },
    ]),
  ],
  declarations: [BoardLayoutWebComponent, BoardLandingWebComponent],
})
export class BoardShellWebModule {}
