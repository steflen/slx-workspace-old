import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { AvailableLangs, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { Observable } from 'rxjs';
// noinspection ES6PreferShortImport
import { SettingsFacade } from '../../store/settings.facade';

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
  activeLanguage$: Observable<string> = this.settingsFacade.activeLanguage$;
  availableLanguages$: Observable<AvailableLangs> = this.settingsFacade.availableLanguages$;

  constructor(private settingsFacade: SettingsFacade) {}

  onLanguageSelect(event: MatSelectChange): void {
    this.settingsFacade.setActiveLanguage(event.value);
  }
}
