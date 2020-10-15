export interface LookAndFeelModel {
  // THEMING
  // active theme gets calculated and can be selected
  availableThemes: Array<string>;
  activeTheme: string;
  dayTheme: string;
  nightTheme: string;
  nightStart: string;
  nightEnd: string;

  // page
  stickyHeader: boolean;
}
