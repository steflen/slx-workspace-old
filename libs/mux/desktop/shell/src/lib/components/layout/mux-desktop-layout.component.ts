import { Component } from '@angular/core';
import { MuxShellFacade } from '@slx/mux-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-mux-desktop-layout',
  templateUrl: './mux-desktop-layout.component.html',
  styleUrls: ['./mux-desktop-layout.component.scss'],
})
export class MuxDesktopLayoutComponent {
  effectiveTheme$: Observable<string> = this.homeShellFacade.effectiveTheme$;

  constructor(private homeShellFacade: MuxShellFacade) {}
}
