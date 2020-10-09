import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { SharedModule } from '@slx/shared';
import { Language } from './interfaces/language.interface';
import { TranslocoHttpLoader } from './services/transloco-loader';

@NgModule({
  imports: [SharedModule, TranslocoModule],
  exports: [TranslocoModule],
})
export class TranslationModule {
  static forRoot(
    // defaults if not provided
    prodMode = true,
    availableLangs: Language[] = [
      { id: 'en', label: 'English' },
      { id: 'de', label: 'Deutsch' },
    ],
    defaultLanguage = 'en',
    fallbackLanguage = 'en',
  ): ModuleWithProviders<any> {
    return {
      ngModule: TranslationModule,
      providers: [
        {
          provide: TRANSLOCO_CONFIG,
          useValue: {
            availableLangs: availableLangs,
            defaultLang: defaultLanguage,
            fallbackLang: fallbackLanguage,
            prodMode: prodMode,
            reRenderOnLangChange: true, // set to true when dynamic language change is in place
            flatten: {
              aot: prodMode,
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
