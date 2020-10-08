export interface SettingsState {
  pending: boolean; // indicates a running request (e.g. for spinner)
  lastResponse?: string;
  lastError?: string | null; // the last error that occurred
  //
  nightTheme: string;
  dayTheme: string;
  theme: string;
  availableThemes: Array<string>;

  stickyHeader: boolean;
  hour: number;
}
