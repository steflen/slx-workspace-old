import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformFeatureShell } from '@slx/home-feature-shell';

const routes: Routes = [
  PlatformFeatureShell.childRoutes([
    {
      path: 'error-overview',
      loadChildren: () => import('@slx/extra-feature-error-overview').then((m) => m.ExtraFeatureErrorOverviewModule),
      data: { title: 'Error Overview' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class ExtraRoutingModule {}
