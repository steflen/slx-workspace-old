import { Component, ViewChild } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { NgxMaterialTimepickerComponent, NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { Observable } from 'rxjs';
// noinspection ES6PreferShortImport
import { SettingsFacade } from '../../store/settings.facade';

@Component({
  selector: 'slx-settings-night-mode-setup',
  templateUrl: './night-mode-setup.component.html',
  styleUrls: ['./night-mode-setup.component.scss'],
})
export class NightModeSetupComponent {
  @ViewChild(NgxMaterialTimepickerComponent) nightStartPicker: NgxMaterialTimepickerComponent;
  @ViewChild(NgxMaterialTimepickerComponent) nightEndPicker: NgxMaterialTimepickerComponent;

  nightTheme$: Observable<string> = this.settingsFacade.nightTheme$;
  nightStart$: Observable<string> = this.settingsFacade.nightStart$;
  nightEnd$: Observable<string> = this.settingsFacade.nightEnd$;
  availableThemes$: Observable<Array<string>> = this.settingsFacade.availableThemes$;
  timePickerFormat$: Observable<12 | 24> = this.settingsFacade.timePickerFormat$;
  effectiveTheme$: Observable<string> = this.settingsFacade.effectiveTheme$;

  lightTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#ababab',
      buttonColor: '#fff',
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#999',
      clockHandColor: '#afbd90',
      clockFaceTimeInactiveColor: '#fff',
    },
  };

  darkTheme: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#242424',
      buttonColor: '#fff',
    },
    dial: {
      dialBackgroundColor: '#555',
    },
    clockFace: {
      clockFaceBackgroundColor: '#444',
      clockHandColor: '#ffbd90',
      clockFaceTimeInactiveColor: '#fff',
    },
  };

  constructor(private settingsFacade: SettingsFacade) {}

  onNightThemeChanged($event: MatSelectChange): void {
    this.settingsFacade.setNightTheme($event.value);
  }
  onNightStartChanged(nightStart: string): void {
    this.settingsFacade.setNightStart(nightStart);
  }

  onNightEndChanged(nightEnd: string): void {
    this.settingsFacade.setNightEnd(nightEnd);
  }

  onThemeChanged($event: MatSelectChange) {
    this.settingsFacade.setActiveTheme($event.value);
  }
}
