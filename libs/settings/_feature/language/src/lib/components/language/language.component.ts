import { Component } from '@angular/core';
import { LanguageFacade } from '@slx/settings-domain';

@Component({
  selector: 'slx-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss'],
})
export class LanguageComponent {
  constructor(private languageFacade: LanguageFacade) {}
}
