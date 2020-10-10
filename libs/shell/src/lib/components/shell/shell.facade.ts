import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEffectiveTheme } from '@slx/settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShellFacade {
  public effectiveTheme$: Observable<string> = this.store.select(selectEffectiveTheme);

  constructor(private store: Store) {}
}
