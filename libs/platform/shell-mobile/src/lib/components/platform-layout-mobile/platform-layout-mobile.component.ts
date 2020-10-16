import { Component } from '@angular/core';
import { PlatformShellFacade } from '@slx/platform-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-platform-layout-web',
  templateUrl: './platform-layout-mobile.component.html',
  styleUrls: ['./platform-layout-mobile.component.scss'],
})
export class PlatformLayoutMobileComponent {
  effectiveTheme$: Observable<string> = this.platformShellFacade.effectiveTheme$;

  constructor(private platformShellFacade: PlatformShellFacade) {}
}
