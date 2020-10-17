import { NavigationExtras, Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface NavigationParams {
  commands: any[];
  extras?: NavigationExtras;
}

export interface OutletNavigationParams {
  name: string;
  route: string;
}
