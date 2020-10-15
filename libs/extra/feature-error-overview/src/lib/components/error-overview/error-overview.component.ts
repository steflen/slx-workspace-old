import { Component } from '@angular/core';
import { ErrorEntity, ErrorOverviewFacade } from '@slx/extra-domain';
import { Observable } from 'rxjs';

@Component({
  selector: 'slx-core-feature-error-overview',
  templateUrl: './error-overview.component.html',
  styleUrls: ['./error-overview.component.scss'],
})
export class ErrorOverviewComponent {
  allErrors$: Observable<Array<ErrorEntity>> = this.errorOverview.allErrors$;
  lastError$: Observable<any> = this.errorOverview.lastError$;
  errorCount$: Observable<number> = this.errorOverview.errorCount$;

  constructor(private readonly errorOverview: ErrorOverviewFacade) {}

  resetErrors() {
    this.errorOverview.resetAllErrors();
  }
}
