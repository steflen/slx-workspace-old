import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { ERROR_FEATURE_KEY } from './error.feature-key';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { ErrorEffects } from './store/error.effects';
import { errorInitialState, reducer } from './store/error.reducer';

@NgModule({
  imports: [
    TranslationModule.forChild(ERROR_FEATURE_KEY, TranslocoHttpLoader),
    StoreModule.forFeature(ERROR_FEATURE_KEY, reducer, {
      initialState: errorInitialState,
    }),
    EffectsModule.forFeature([ErrorEffects]),
  ],
  providers: [
    ErrorEffects,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true,
    },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
  ],
})
export class ErrorModule {}
