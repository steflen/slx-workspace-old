import { Component } from '@angular/core';
import { NavigatorFacade } from '@slx/extra-domain';

@Component({
  selector: 'slx-core-feature-navigate-forward',
  templateUrl: './navigate-forward.component.html',
  styleUrls: ['./navigate-forward.component.scss'],
})
export class NavigateForwardComponent {
  constructor(private readonly navigatorFacade: NavigatorFacade) {}
}
