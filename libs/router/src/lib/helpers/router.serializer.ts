import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
// noinspection ES6PreferShortImport
import { RouterStateUrl } from '../router.interface';

export class RouterSerializer implements RouterStateSerializer<RouterStateUrl> {
  public serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }
    const {
      url,
      root: { queryParams, params },
    } = routerState;

    const mapParams: Map<string, string> = new Map<string, string>();
    const mapQueryParams: Map<string, string> = new Map<string, string>();
    Object.keys(params).forEach((key) => mapParams.set(key, params[key]));
    Object.keys(queryParams).forEach((key) => mapQueryParams.set(key, queryParams[key]));
    // instead of the entire snapshot this only returns an object including URL, params and query params
    return { url, params: mapParams, queryParams: mapQueryParams };
  }
}
