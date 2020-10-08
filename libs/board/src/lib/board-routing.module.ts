import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@slx/shell';
import { BoardComponent } from './components/board/board.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/board', pathMatch: 'full' },
    {
      path: 'board',
      component: BoardComponent,
      data: { title: 'Board' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BoardRoutingModule {}
