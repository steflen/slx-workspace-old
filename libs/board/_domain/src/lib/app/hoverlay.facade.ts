import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class HoverlayFacade {
  constructor(private store: Store) {}
}
