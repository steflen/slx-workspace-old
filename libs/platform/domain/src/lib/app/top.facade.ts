import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class PlatformTopFacade {
  constructor(private store: Store) {}
}
