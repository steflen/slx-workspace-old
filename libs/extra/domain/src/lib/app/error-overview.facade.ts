import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ErrorActions from '../+error/error.actions';
import { ErrorEntity } from '../+error/error.models';
import * as ErrorQuery from '../+error/error.selectors';

@Injectable({
  providedIn: 'root',
})
export class ErrorOverviewFacade {
  public state$ = this.store.select(ErrorQuery.getState);
  public lastError$ = this.store.select(ErrorQuery.getLastError);
  public allErrors$: Observable<Array<ErrorEntity>> = this.store.pipe(select(ErrorQuery.getAllErrors));
  public errorCount$: Observable<number> = this.store.pipe(select(ErrorQuery.getErrorCount));

  constructor(private store: Store) {}

  public addNewError(error: ErrorEntity, severity: 'default' | 'high' = 'default') {
    this.store.dispatch(ErrorActions.addNewErrorAction({ error, date: new Date(), severity }));
  }

  public resetAllErrors() {
    this.store.dispatch(ErrorActions.resetAllErrorsAction());
  }
}
