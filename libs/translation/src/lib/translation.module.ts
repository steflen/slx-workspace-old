import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  TranslocoConfig,
  TranslocoModule,
  TRANSLOCO_CONFIG,
  TRANSLOCO_LOADER,
  TRANSLOCO_SCOPE,
} from '@ngneat/transloco';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '@slx/shared';
import { LanguageSelectComponent } from './components/language-select/language-select.component';
import { Language } from './interfaces/language.interface';
import { TranslocoHttpLoader } from './services/transloco-loader';
import { TranslationEffects } from './store/translation.effects';
import { reducer, translationInitialState } from './store/translation.reducer';
import { TRANSLATION_FEATURE_KEY } from './translation.feature-key';

@NgModule({
  imports: [
    SharedModule,
    TranslocoModule,
    StoreModule.forFeature(TRANSLATION_FEATURE_KEY, reducer, { initialState: translationInitialState }),
    EffectsModule.forFeature([TranslationEffects]),
  ],
  declarations: [LanguageSelectComponent],
  exports: [TranslocoModule, LanguageSelectComponent],
})
export class TranslationModule {
  static forRoot(
    prodMode: boolean,
    availableLangs: Language[] = [
      { id: 'en', label: 'English' },
      { id: 'de', label: 'Deutsch' },
    ],
  ): ModuleWithProviders<any> {
    return {
      ngModule: TranslationModule,
      providers: [
        {
          provide: TRANSLOCO_CONFIG,
          useValue: {
            availableLangs: availableLangs,
            defaultLang: 'en',
            fallbackLang: 'en',
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
