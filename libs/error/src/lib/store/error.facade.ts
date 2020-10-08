import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ErrorActions from './error.actions';
import { ErrorEntity } from './error.models';
import { errorQuery } from './error.selectors';

@Injectable({
  providedIn: 'root',
})
export class ErrorFacade {
  public state$ = this.store.select(errorQuery.getState);
  public lastError$ = this.store.select(errorQuery.getLastError);
  public allErrors$: Observable<Array<ErrorEntity>> = this.store.pipe(select(errorQuery.getAllErrors));
  public errorCount$: Observable<number> = this.store.pipe(select(errorQuery.getErrorCount));

  constructor(private store: Store) {}

  public addNewError(error: ErrorEntity) {
    this.store.dispatch(ErrorActions.addNewErrorAction({ error }));
  }

  public resetAllErrors() {
    this.store.dispatch(ErrorActions.resetAllErrorsAction());
  }
}
