import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class PlatformBottomFacade {
  constructor(private store: Store) {}
}
