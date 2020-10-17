import { Component } from '@angular/core';
import { MuxShellFacade } from '@slx/mux-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-mux-web-layout',
  templateUrl: './mux-web-layout.component.html',
  styleUrls: ['./mux-web-layout.component.scss'],
})
export class MuxWebLayoutComponent {
  effectiveTheme$: Observable<string> = this.homeShellFacade.effectiveTheme$;

  constructor(private homeShellFacade: MuxShellFacade) {}
}
