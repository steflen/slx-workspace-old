import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';
// noinspection ES6PreferShortImport
import { SettingsFacade } from '../../store/settings.facade';

@Component({
  selector: 'slx-settings-night-mode-setup',
  templateUrl: './night-mode-setup.component.html',
  styleUrls: ['./night-mode-setup.component.scss'],
})
export class NightModeSetupComponent {
  nightTheme$: Observable<string> = this.settingsFacade.nightTheme$;
  nightTimeFrom$: Observable<string> = this.settingsFacade.nightTimeFrom$;
  nightTimeTo$: Observable<string> = this.settingsFacade.nightTimeTo$;
  availableThemes$: Observable<Array<string>> = this.settingsFacade.availableThemes$;
  timePickerFormat$: Observable<12 | 24> = this.settingsFacade.timePickerFormat$;

  constructor(private settingsFacade: SettingsFacade) {}

  onNightThemeChanged(event$: MatSelectChange): void {
    this.settingsFacade.setNightTheme(event$.value);
  }
  onNightTimeFromChanged(nightTimeFrom: string): void {
    this.settingsFacade.setNightTimeFrom(nightTimeFrom);
  }
  onNightTimeToChanged(nightTimeTo: string): void {
    this.settingsFacade.setNightTimeTo(nightTimeTo);
  }
}
