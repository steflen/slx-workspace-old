import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectEffectiveTheme } from '@slx/settings-domain';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlueShellFacade {
  public effectiveTheme$: Observable<string> = this.store.select(selectEffectiveTheme);

  constructor(private store: Store) {}
}
