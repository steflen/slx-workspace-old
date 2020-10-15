export interface TimeAndDateModel {
  // pending: boolean; // indicates a running request (e.g. for spinner)
  // lastResponse?: string;
  // lastError?: string | null; // the last error that occurred

  // time & date
  timeHumanReadable: string;
  dateHumanReadable: string;
  dateTimeRFC7231: string;
  dateFormatted: string;
  date: Date;
  timePickerFormat: 12 | 24;
}
