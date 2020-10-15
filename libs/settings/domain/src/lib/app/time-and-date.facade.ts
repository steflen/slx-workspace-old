import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { DateFnsConfigurationService } from 'ngx-date-fns';
import { Observable } from 'rxjs';
// noinspection ES6PreferShortImport
import { TimeAndDateModel } from '../+time-and-date/time-and-date.model';
import * as TimeAndDateQuery from '../+time-and-date/time-and-date.selectors';

@Injectable({
  providedIn: 'root',
})
export class TimeAndDateFacade {
  //both featureState and state should be the same ..
  public featureState$: Observable<TimeAndDateModel> = this.store.select(TimeAndDateQuery.selectTimeAndDateFeature);
  public state$: Observable<TimeAndDateModel> = this.store.select(TimeAndDateQuery.selectTimeAndDateState);

  public rawDate$: Observable<Date> = this.store.select(TimeAndDateQuery.selectDate);
  public rfcDateTime$: Observable<string> = this.store.select(TimeAndDateQuery.selectDateTimeRFC);
  public humanDate$: Observable<string> = this.store.select(TimeAndDateQuery.selectDateHumanReadable);
  public humanTime$: Observable<string> = this.store.select(TimeAndDateQuery.selectTimeHumanReadable);

  constructor(private store: Store, private dateFns: DateFnsConfigurationService) {}
}
