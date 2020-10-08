import { combineLatest, ObservableInput } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';

export const allTrue = (...observables: Array<ObservableInput<boolean>>) =>
  combineLatest(observables).pipe(
    map((values) => values.every((v) => v === true)),
    distinctUntilChanged(),
  );
export const allFalse = (...observables: Array<ObservableInput<boolean>>) =>
  combineLatest(observables).pipe(
    map((values) => values.every((v) => v === false)),
    distinctUntilChanged(),
  );
export const anyTrue = (...observables: Array<ObservableInput<boolean>>) =>
  combineLatest(observables).pipe(
    map((values) => values.find((v) => v === true) !== undefined),
    distinctUntilChanged(),
  );
export const anyFalse = (...observables: Array<ObservableInput<boolean>>) =>
  combineLatest(observables).pipe(
    map((values) => values.find((v) => v === false) !== undefined),
    distinctUntilChanged(),
  );
