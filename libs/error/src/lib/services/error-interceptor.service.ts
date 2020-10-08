import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { v4 as uuidV4 } from 'uuid';
// noinspection ES6PreferShortImport
import { ErrorFacade } from '../store/error.facade';

@Injectable()
export class ErrorInterceptorService {
  constructor(private readonly injector: Injector, private facade: ErrorFacade) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log('==== CORE-ERROR-INTERCEPTOR => HTTP-REQUEST ====');
    // console.log(request);
    return next.handle(request).pipe(
      // OPERATION 1
      tap({
        //   // NEXT TAP
        // next: (
        //     value:
        //         | HttpSentEvent
        //         | HttpHeaderResponse
        //         | HttpResponse<any>
        //         | HttpProgressEvent
        //         | HttpUserEvent<any>,
        // ) => {
        //     if (!environment.production) {
        //         console.log(value);
        //     }
        //   },
        // ERROR TAP
        error: (error: any) => {
          // console.log('==== CORE-ERROR-INTERCEPTOR => HTTP REQUEST TAP ERROR ====');
          // console.log(error);
          this.facade.addNewError({
            id: uuidV4(),
            error: error,
            code: error.code ? error.code : null,
            message: error.message ? error.message : null,
          });
          const appErrorHandler = this.injector.get(ErrorHandler);
          appErrorHandler.handleError(error);
        },
      }),
      // // OPERATION 2
      // catchError((error, caught) => {
      //   const err: any = throwApiError(error);
      //   if (error instanceof HttpErrorResponse) {
      //     console.log('==== CORE-ERROR-INTERCEPTOR => HTTP-ERROR-RESPONSE ====');
      //     console.log(error);
      //     if (error.status === 401 || error.status === 403) {
      //       this.facade.throwUnauthorizedError(err);
      //     } else if (error.status >= 500) {
      //       this.facade.throw500Error(err);
      //     }
      //   }
      //   console.log('==== CORE-ERROR-INTERCEPTOR => UNKNOWN ERROR ====');
      //   console.log(error);
      //   return throwError(err);
      // }),
    );
  }
}
