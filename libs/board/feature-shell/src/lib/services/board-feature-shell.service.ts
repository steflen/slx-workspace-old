import { Route, Routes } from '@angular/router';

export class BoardFeatureShell {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: BoardFeatureShellComponent,
      children: routes,
      canActivate: [
        /*AuthenticationGuard*/
      ],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
