import { Injectable } from '@angular/core';
import { CustomIconService } from '@slx/shared-material';

@Injectable({
  providedIn: 'root',
})
export class CoreInitService {
  constructor(private iconService: CustomIconService /*,private i18nFacade: I18nFacade*/) {}

  public init(): Promise<boolean> {
    return this.load();
  }

  private async load(): Promise<boolean> {
    this.iconService.registerIcons();
    return true;
  }
}

export function initCore(service: CoreInitService) {
  return () => service.init();
}
