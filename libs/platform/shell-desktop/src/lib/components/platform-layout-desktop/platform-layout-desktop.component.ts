import { Component } from '@angular/core';
import { PlatformShellFacade } from '@slx/platform-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-platform-layout-web',
  templateUrl: './platform-layout-desktop.component.html',
  styleUrls: ['./platform-layout-desktop.component.scss'],
})
export class PlatformLayoutDesktopComponent {
  effectiveTheme$: Observable<string> = this.platformShellFacade.effectiveTheme$;

  constructor(private platformShellFacade: PlatformShellFacade) {}
}
