import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { Environment, SharedModule } from '@slx/shared';
import { TranslocoHttpLoader } from './services/transloco-loader';

@NgModule({
  imports: [SharedModule, TranslocoModule],
  exports: [TranslocoModule],
})
export class TranslationModule {
  static forRoot(environment: Environment): ModuleWithProviders<any> {
    return {
      ngModule: TranslationModule,
      providers: [
        {
          provide: TRANSLOCO_CONFIG,
          useValue: {
            availableLangs: environment.availableLanguages,
            defaultLang: environment.defaultLanguage,
            fallbackLang: environment.fallbackLanguage,
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
      ngModule: TranslationModule,
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
