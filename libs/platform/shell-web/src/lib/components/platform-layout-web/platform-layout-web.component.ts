import { Component } from '@angular/core';
import { PlatformShellFacade } from '@slx/platform-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-platform-layout-web',
  templateUrl: './platform-layout-web.component.html',
  styleUrls: ['./platform-layout-web.component.scss'],
})
export class PlatformLayoutWebComponent {
  effectiveTheme$: Observable<string> = this.platformShellFacade.effectiveTheme$;

  constructor(private platformShellFacade: PlatformShellFacade) {}
}
