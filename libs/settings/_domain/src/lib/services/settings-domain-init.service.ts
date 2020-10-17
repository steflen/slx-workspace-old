import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Environment, ENVIRONMENT_TOKEN } from '@slx/shared-common';
import * as languageActions from '../+language/language.actions';
import * as localeActions from '../+locale/locale.actions';
import * as lookAndFeelActions from '../+look-and-feel/look-and-feel.actions';

// noinspection ES6PreferShortImport

// import { I18nFacade } from '@app/core/services/i18n/+store/i18n.facade';

/**
 * Init Service
 * ---
 * Handles application initialization. It is also used into the hook of Angular init process.
 * An `APP_INITIALIZER` provider is set in the `CoreModule` which call `init` method.
 */
@Injectable()
export class SettingsDomainInitService {
  constructor(@Inject(ENVIRONMENT_TOKEN) private environment: Environment, private store: Store) {}

  public async init(): Promise<boolean> {
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log(this.environment);
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXx');
    await this.initTimeAndDate();
    await this.initLocale();
    await this.initLanguage();
    await this.initLookAndFeel();
    return true;
  }

  private async initTimeAndDate(): Promise<boolean> {
    return true;
  }

  private async initLanguage(): Promise<boolean> {
    this.store.dispatch(
      languageActions.setAvailableLanguages({ availableLanguages: this.environment.language.availableLanguages }),
    );
    this.store.dispatch(
      languageActions.setActiveLanguage({ activeLanguage: this.environment.language.defaultLanguage }),
    );
    return true;
  }

  private async initLocale(): Promise<boolean> {
    this.store.dispatch(localeActions.setActiveLocale({ activeLocale: this.environment.locale.defaultLocale }));
    this.store.dispatch(
      localeActions.setAvailableLocales({ availableLocales: this.environment.locale.availableLocales }),
    );
    return true;
  }

  private async initLookAndFeel(): Promise<boolean> {
    this.store.dispatch(lookAndFeelActions.setActiveTheme({ activeTheme: this.environment.lookAndFeel.defaultTheme }));
    this.store.dispatch(
      lookAndFeelActions.setAvailableThemes({ availableThemes: this.environment.lookAndFeel.availableThemes }),
    );
    this.store.dispatch(lookAndFeelActions.setDayTheme({ dayTheme: this.environment.lookAndFeel.defaultTheme }));
    this.store.dispatch(lookAndFeelActions.setNightTheme({ nightTheme: this.environment.lookAndFeel.nightTheme }));
    this.store.dispatch(lookAndFeelActions.setNightStart({ nightStart: this.environment.lookAndFeel.nightStart }));
    this.store.dispatch(lookAndFeelActions.setNightEnd({ nightEnd: this.environment.lookAndFeel.nightEnd }));

    return true;
  }
}
