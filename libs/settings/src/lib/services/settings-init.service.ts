import { Inject, Injectable } from '@angular/core';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared';
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
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: Environment,

    private settingsFacade: SettingsFacade,
  ) {}

  public async init(): Promise<boolean> {
    await this.initLanguages();
    await this.initLocales();
    await this.initTheming();
    return true;
  }

  private async initLocales(): Promise<boolean> {
    this.settingsFacade.setAvailableLocales(this.environment.availableLocales);
    this.settingsFacade.setActiveLocale(this.environment.defaultLocale);
    return true;
  }

  private async initLanguages(): Promise<boolean> {
    this.settingsFacade.setAvailableLanguages(this.environment.availableLanguages);
    this.settingsFacade.setActiveLanguage(this.environment.defaultLanguage);
    return true;
  }

  private async initTheming(): Promise<boolean> {
    this.settingsFacade.setAvailableThemes(this.environment.availableThemes);
    this.settingsFacade.setActiveTheme(this.environment.defaultTheme);
    this.settingsFacade.setDayTheme(this.environment.defaultTheme);
    this.settingsFacade.setNightTheme(this.environment.nightTheme);
    this.settingsFacade.setNightStart(this.environment.nightStart);
    this.settingsFacade.setNightEnd(this.environment.nightEnd);
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
