import { Component } from '@angular/core';
import { GlueShellFacade } from '@slx/glue-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-glue-feature-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class GlueFeatureShellComponent {
  effectiveTheme$: Observable<string> = this.glueShellFacade.effectiveTheme$;

  constructor(private glueShellFacade: GlueShellFacade) {}
}
