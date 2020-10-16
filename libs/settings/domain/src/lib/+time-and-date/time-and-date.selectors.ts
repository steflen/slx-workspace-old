import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TimeAndDateModel } from '@slx/shared-common';
import { SETTINGS_FEATURE_TIME_AND_DATE } from '../settings.features';

export const selectTimeAndDateFeature = createFeatureSelector<TimeAndDateModel>(SETTINGS_FEATURE_TIME_AND_DATE);
export const selectTimeAndDateState = createSelector(selectTimeAndDateFeature, (state: TimeAndDateModel) => state);

export const selectTimeHumanReadable = createSelector(
  selectTimeAndDateState,
  ({ timeHumanReadable }) => timeHumanReadable,
);
export const selectDateHumanReadable = createSelector(
  selectTimeAndDateState,
  ({ dateHumanReadable }) => dateHumanReadable,
);
export const selectDate = createSelector(selectTimeAndDateState, ({ date }) => date);
export const selectDateTimeRFC = createSelector(selectTimeAndDateState, ({ dateTimeRFC7231 }) => dateTimeRFC7231);
