import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { Environment, SharedCommonModule } from '@slx/shared-common';
import { TranslocoHttpLoader } from './services/transloco-loader';

@NgModule({
  imports: [SharedCommonModule, TranslocoModule],
  exports: [TranslocoModule],
})
export class SharedTranslationModule {
  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: SharedTranslationModule,
      providers: [
        {
          provide: TRANSLOCO_CONFIG,
          useValue: {
            availableLangs: environment.language.availableLanguages,
            defaultLang: environment.language.defaultLanguage,
            fallbackLang: environment.language.fallbackLanguage,
            prodMode: environment.production,
            reRenderOnLangChange: true, // set to true when dynamic language change is in place
            flatten: {
              aot: environment.production,
            },
          } as TranslocoConfig,
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
      ],
    };
  }

  static forChild(scopeName: string, loader: any): ModuleWithProviders<any> {
    return {
      ngModule: SharedTranslationModule,
      providers: [
        {
          provide: TRANSLOCO_SCOPE,
          useValue: {
            scope: scopeName,
            loader,
          },
        },
      ],
    };
  }
}
