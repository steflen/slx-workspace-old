import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlueFeatureShell } from '@slx/glue-feature-shell';
import { ExtraFeatureShellComponent } from './components/shell/shell.component';

const routes: Routes = [
  GlueFeatureShell.childRoutes([
    {
      path: 'extra',
      component: ExtraFeatureShellComponent,
      data: { title: 'Extra' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ExtraRoutingModule {}
