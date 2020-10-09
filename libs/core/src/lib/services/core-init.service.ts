import { Injectable } from '@angular/core';
import { CustomIconService } from '@slx/shared-material';

// import { I18nFacade } from '@app/core/services/i18n/+store/i18n.facade';

/**
 * Init Service
 * ---
 * Handles application initialization. It is also used into the hook of Angular init process.
 * An `APP_INITIALIZER` provider is set in the `CoreModule` which call `init` method.
 */
@Injectable()
export class CoreInitializerService {
  constructor(private iconService: CustomIconService /*,private i18nFacade: I18nFacade*/) {}

  public init(): Promise<boolean> {
    return this.load();
  }

  private async load(): Promise<boolean> {
    // this.i18nFacade.setLanguage('en');
    // await this.i18nFacade.setLanguage('en').toPromise()...

    this.iconService.registerIcons();
    return true;
  }
}

/**
 * This method is used as hook into Angular's init process.
 * @returns Take the service as dependencies and returns the init method.
 */
export function initCore(service: CoreInitializerService) {
  return () => service.init();
}
