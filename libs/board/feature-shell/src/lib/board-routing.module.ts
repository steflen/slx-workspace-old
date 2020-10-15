import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlueFeatureShell } from '@slx/glue-feature-shell';
import { BoardFeatureShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  GlueFeatureShell.childRoutes([
    // { path: '', redirectTo: '/board', pathMatch: 'full' },
    {
      path: 'board',
      component: BoardFeatureShellComponent,
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
