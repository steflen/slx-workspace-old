import { Component } from '@angular/core';
import { PlatformShellFacade } from '@slx/home-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-platform-web-layout',
  templateUrl: './platform-web-layout.component.html',
  styleUrls: ['./platform-web-layout.component.scss'],
})
export class HomeWebLayoutComponent {
  effectiveTheme$: Observable<string> = this.platformShellFacade.effectiveTheme$;

  constructor(private platformShellFacade: PlatformShellFacade) {}
}
