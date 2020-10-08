import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  constructor(private readonly snackBar: MatSnackBar, private readonly zone: NgZone) {}

  default(message: string): void {
    this.show(message, {
      duration: 5000,
      panelClass: 'default-notification-overlay',
    });
  }

  info(message: string): void {
    this.show(message, {
      duration: 5000,
      panelClass: 'info-notification-overlay',
    });
  }

  success(message: string): void {
    this.show(message, {
      duration: 5000,
      panelClass: 'success-notification-overlay',
    });
  }

  warn(message: string): void {
    this.show(message, {
      duration: 5000,
      panelClass: 'warning-notification-overlay',
    });
  }

  error(message: string): void {
    this.show(message, {
      horizontalPosition: 'center',
      politeness: 'assertive',
      duration: 7000,
      panelClass: 'error-notification-overlay',
    });
  }

  private show(message: string, configuration: MatSnackBarConfig): void {
    // open snackBar from ngZone => preventing position error
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, undefined, configuration));
  }
}
