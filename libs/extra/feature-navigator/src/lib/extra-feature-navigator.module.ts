import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavigateBackwardComponent } from './components/navigate-backward/navigate-backward.component';
import { NavigateForwardComponent } from './components/navigate-forward/navigate-forward.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavigateForwardComponent, NavigateBackwardComponent],
})
export class ExtraFeatureNavigatorModule {}
