import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlueFeatureShell } from '@slx/glue-feature-shell';
import { SettingsFeatureShellComponent } from './components/settings-feature-shell/settings-shell.component';

const routes: Routes = [
  GlueFeatureShell.childRoutes([
    {
      path: 'settings',
      component: SettingsFeatureShellComponent,
      data: { title: 'Settings' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BoardRoutingModule {}
