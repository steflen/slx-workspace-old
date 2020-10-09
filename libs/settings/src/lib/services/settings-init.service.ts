import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
// noinspection ES6PreferShortImport
import { SettingsFacade } from '../store/settings.facade';

// import { I18nFacade } from '@app/core/services/i18n/+store/i18n.facade';

/**
 * Init Service
 * ---
 * Handles application initialization. It is also used into the hook of Angular init process.
 * An `APP_INITIALIZER` provider is set in the `CoreModule` which call `init` method.
 */
@Injectable()
export class SettingsInitService {
  constructor(private translocoService: TranslocoService, private settingsFacade: SettingsFacade) {}

  public init(): Promise<boolean> {
    return this.load();
  }

  private async load(): Promise<boolean> {
    this.settingsFacade.setDefaultLanguage(this.translocoService.getDefaultLang());
    this.settingsFacade.setAvailableLanguages(this.translocoService.getAvailableLangs());
    const activeLanguage: string = this.translocoService.getActiveLang();
    this.settingsFacade.setActiveLanguage(activeLanguage);
    // i dont know much about relation between locale and language yet
    // locale => date-fnx & ngx-date-fns
    // language => transloco
    // todo: check best practise how both tools work together
    if (activeLanguage === 'en') {
      this.settingsFacade.setLocale('en-US');
    } else if (activeLanguage === 'de') {
      this.settingsFacade.setLocale('de-DE');
    } else {
      //fallback to en
      this.settingsFacade.setLocale('en-US');
    }
    // asymc return is qnd'ish yet => todo
    return true;
  }
}

/**
 * This method is used as hook into Angular's init process.
 * @returns Take the service as dependencies and returns the init method.
 */
export function initSettings(service: SettingsInitService) {
  return () => service.init();
}
