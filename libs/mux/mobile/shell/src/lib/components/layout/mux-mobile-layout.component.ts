import { Component } from '@angular/core';
import { MuxShellFacade } from '@slx/mux-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-mux-mobile-layout',
  templateUrl: './mux-mobile-layout.component.html',
  styleUrls: ['./mux-mobile-layout.component.scss'],
})
export class MuxMobileLayoutComponent {
  effectiveTheme$: Observable<string> = this.homeShellFacade.effectiveTheme$;

  constructor(private homeShellFacade: MuxShellFacade) {}
}
