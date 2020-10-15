import { Action, createReducer, on } from '@ngrx/store';
import { format, formatRFC7231 } from 'date-fns';
import { setActiveTheme } from '../+look-and-feel/look-and-feel.actions';
import * as actions from './time-and-date.actions';
// noinspection ES6PreferShortImport
import { TimeAndDateModel } from './time-and-date.model';

export const initialState: TimeAndDateModel = {
  dateHumanReadable: null,
  timeHumanReadable: null,
  dateFormatted: null,
  dateTimeRFC7231: null,
  date: null,
  timePickerFormat: null,
};

const reducer = createReducer(
  initialState,
  on(setActiveTheme, (state, action): TimeAndDateModel => ({ ...state, ...action })),

  on(
    actions.updateTimeAndDate,
    (state): TimeAndDateModel => ({
      ...state,
      date: new Date(),
      dateFormatted: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      dateTimeRFC7231: formatRFC7231(new Date()),
      dateHumanReadable: format(new Date(), 'MM/dd/yyyy'),
      timeHumanReadable: format(new Date(), 'HH:mm:ss'),
    }),
  ),
);

export function timeAndDateReducer(state: TimeAndDateModel | null, action: Action): TimeAndDateModel {
  return reducer(state, action);
}
