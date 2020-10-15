import { Component } from '@angular/core';
import { NavigatorFacade } from '@slx/extra-domain';

@Component({
  selector: 'slx-core-feature-navigate-backwards',
  templateUrl: './navigate-backward.component.html',
  styleUrls: ['./navigate-backward.component.scss'],
})
export class NavigateBackwardComponent {
  constructor(private readonly navigatorFacade: NavigatorFacade) {}
}
