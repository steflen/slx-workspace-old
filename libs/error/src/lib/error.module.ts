import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@slx/shared';
import { SharedMaterialModule } from '@slx/shared-material';
import { TranslationModule, TranslocoHttpLoader } from '@slx/translation';
import { ErrorListComponent } from './components/error-list/error-list.component';
import { ErrorRoutingModule } from './error-routing.module';
import { ERROR_FEATURE_KEY } from './error.feature-key';
import { ErrorHandlerService } from './services/error-handler.service';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { ErrorEffects } from './store/error.effects';
import { errorInitialState, reducer } from './store/error.reducer';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    SharedMaterialModule,
    TranslationModule.forChild(ERROR_FEATURE_KEY, TranslocoHttpLoader),
    StoreModule.forFeature(ERROR_FEATURE_KEY, reducer, {
      initialState: errorInitialState,
    }),
    EffectsModule.forFeature([ErrorEffects]),
    ErrorRoutingModule,
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
  declarations: [ErrorListComponent],
})
export class ErrorModule {}
