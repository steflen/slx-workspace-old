import { Component } from '@angular/core';
// noinspection ES6PreferShortImport
import { SettingsFacade } from '../../store/settings.facade';

@Component({
  selector: 'slx-settings-locale-setup',
  templateUrl: './locale-setup.component.html',
  styleUrls: ['./locale-setup.component.scss'],
})
export class LocaleSetupComponent {
  constructor(private settingsFacade: SettingsFacade) {}

  // onLocaleChanged($event: MatSelectChange) {
  //   this.settingsFacade.setLocale($event.value);
  // }
}
