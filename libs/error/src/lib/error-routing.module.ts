import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@slx/shell';
import { ErrorListComponent } from './components/error-list/error-list.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/board', pathMatch: 'full' },
    {
      path: 'errors',
      component: ErrorListComponent,
      data: { title: 'Error List' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ErrorRoutingModule {}
