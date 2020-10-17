import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class MuxBottomFacade {
  constructor(private store: Store) {}
}
