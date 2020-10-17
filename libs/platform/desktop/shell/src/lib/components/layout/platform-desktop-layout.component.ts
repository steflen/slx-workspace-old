import { Component } from '@angular/core';
import { PlatformShellFacade } from '@slx/platform-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-platform-desktop-layout',
  templateUrl: './platform-desktop-layout.component.html',
  styleUrls: ['./platform-desktop-layout.component.scss'],
})
export class PlatformDesktopLayoutComponent {
  effectiveTheme$: Observable<string> = this.platformShellFacade.effectiveTheme$;

  constructor(private platformShellFacade: PlatformShellFacade) {}
}
