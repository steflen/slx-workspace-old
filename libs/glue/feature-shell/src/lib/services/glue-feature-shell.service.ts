import { Route, Routes } from '@angular/router';
import { GlueFeatureShellComponent } from '../components/shell/shell.component';

// import { AuthenticationGuard } from '@slx/auth....';

export class GlueFeatureShell {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: GlueFeatureShellComponent,
      children: routes,
      canActivate: [
        /*AuthenticationGuard*/
      ],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
