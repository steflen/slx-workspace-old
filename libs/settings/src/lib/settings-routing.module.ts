import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shell } from '@slx/shell';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  Shell.childRoutes([
    // { path: '', redirectTo: '/board', pathMatch: 'full' },
    {
      path: 'settings',
      component: SettingsComponent,
      data: { title: 'Settings' },
    },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class SettingsRoutingModule {}
