import { Route, Routes } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';
// import { AuthenticationGuard } from '@slx/auth....';

export class Shell {
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: ShellComponent,
      children: routes,
      canActivate: [
        /*AuthenticationGuard*/
      ],
      // Reuse ShellComponent instance when navigating between child views
      data: { reuse: true },
    };
  }
}
