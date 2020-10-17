import { Directive } from '@angular/core';
import { AvailableLangs } from '@ngneat/transloco';
import { LanguageFacade } from '@slx/settings-domain';
import { Observable } from 'rxjs';

@Directive()
export abstract class LanguageBaseComponent {
  availableLanguages: Observable<AvailableLangs> = this.languageFacade.availableLanguages$;
  activeLanguage: Observable<string> = this.languageFacade.activeLanguage$;

  protected constructor(protected languageFacade: LanguageFacade) {}
}
