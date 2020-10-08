import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as TranslationActions from './translation.actions';

@Injectable()
export class TranslationEffects {
  constructor(private actions$: Actions, private translocoService: TranslocoService) {}

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   */
  public setLanguage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(TranslationActions.setLanguageAction),
        tap(({ language }) => {
          this.translocoService.setActiveLang(language);
        }),
      ),
    { dispatch: false },
  );
}
