import { Component } from '@angular/core';
import { PlatformShellFacade } from '@slx/home-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-platform-mobile-layout',
  templateUrl: './platform-mobile-layout.component.html',
  styleUrls: ['./platform-mobile-layout.component.scss'],
})
export class PlatformMobileLayoutComponent {
  effectiveTheme$: Observable<string> = this.platformShellFacade.effectiveTheme$;

  constructor(private platformShellFacade: PlatformShellFacade) {}
}
