import { Component } from '@angular/core';
import { Observable } from 'rxjs';
// noinspection ES6PreferShortImport
import { ErrorFacade } from '../../store/error.facade';
// noinspection ES6PreferShortImport
import { ErrorEntity } from '../../store/error.models';

@Component({
  selector: 'slx-error-list',
  templateUrl: './error-list.component.html',
  styleUrls: ['./error-list.component.scss'],
})
export class ErrorListComponent {
  allErrors$: Observable<Array<ErrorEntity>> = this.errorFacade.allErrors$;
  lastError$: Observable<any> = this.errorFacade.lastError$;
  errorCount$: Observable<number> = this.errorFacade.errorCount$;

  constructor(private readonly errorFacade: ErrorFacade) {}

  resetErrors() {
    this.errorFacade.resetAllErrors();
  }
}
