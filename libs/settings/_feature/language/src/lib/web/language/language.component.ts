import { Component } from '@angular/core';
import { LanguageFacade } from '@slx/settings-domain';
import { LanguageBaseComponent } from '../../base/language.base.component';

@Component({
  selector: 'slx-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent extends LanguageBaseComponent {
  constructor(protected languageFacade: LanguageFacade) {
    super(languageFacade);
  }
}
