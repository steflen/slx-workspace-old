import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ShellFacade } from './shell.facade';

@Component({
  selector: 'slx-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent {
  effectiveTheme$: Observable<string> = this.shellFacade.effectiveTheme$;

  constructor(private shellFacade: ShellFacade) {}
}
