import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { LocaleComponent } from './components/lazy-locale/locale.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerComponent,
        children: [
          {
            path: 'locale',
            component: PlaceholderComponent,
            data: { path: 'locale' },
          },
          {
            path: 'lazy-whatever',
            component: PlaceholderComponent,
            data: { path: 'lazy-whatever' },
          },
        ],
      },
    ]),
  ],
  declarations: [LocaleComponent, PlaceholderComponent, ContainerComponent],
})
export class SettingsFeatureLocaleModule {}
