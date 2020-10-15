import { Component } from '@angular/core';
import { TimeAndDateFacade } from '@slx/settings-domain';

@Component({
  selector: 'slx-settings-feature-time-and-date',
  templateUrl: './time-and-date.component.html',
  styleUrls: ['./time-and-date.component.scss'],
})
export class TimeAndDateComponent {
  constructor(private timeAndDateFacade: TimeAndDateFacade) {}
}
