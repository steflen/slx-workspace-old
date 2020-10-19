// import { NotificationService } from './notifications.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Injectable()
export class ErrorHandlerService extends ErrorHandler {
  constructor() {
    // private translateService: TranslateService, // private readonly notificationsService: NotificationService,
    super();
  }

  handleError(error: Error | HttpErrorResponse): void {
    // in case the core is recognized as a core the backend responds NOT with an error
    // instead it is a correct error which has wrong UserRole, this comparison has do be done there
    // the notification is triggered from auth.effects
    if (error instanceof TimeoutError) {
      // this.notificationsService.error(this.translateService.instant('ocs.error.timeout-error'));
      // console.log('XXXXXXX TIMEOUT ERROR XXXXXXXX');
    } else {
      // console.log('XXXXXXX UNKNOWN ERROR XXXXXXXX');
      // this.notificationsService.error(this.translateService.instant('ocs.error.common'));
    }
    // logging the error to console is part of the base functionality, so call super
    // if we dont want to log .. can be cased away ...
    // https://angular.io/api/core/ErrorHandler
    super.handleError(error);
  }
}
