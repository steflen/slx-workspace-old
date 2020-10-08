import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // when nothing matches, redirect to ''
  // AppRoutingModule should be imported at last !!
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes /*{
      initialNavigation: 'enabled',
      onSameUrlNavigation: 'ignore',
      useHash: false
    }*/,
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
