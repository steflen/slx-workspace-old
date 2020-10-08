import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { TranslationFacade } from '../../store/translation.facade';

@Component({
  selector: 'slx-lib-translation-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: 'translation',
    },
  ],
})
export class LanguageSelectComponent {
  constructor(public translation: TranslationFacade) {}

  onLanguageSelect(event: MatSelectChange): void {
    this.translation.setLanguage(event.value);
  }
}
