import { NavigationExtras, Params } from '@angular/router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface NavigationParams {
  commands: any[];
  // query?: any;
  extras?: NavigationExtras;
}

export interface NavigationOutlet {
  name: string;
  route: string;
}
