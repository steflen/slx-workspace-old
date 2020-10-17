import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-playground-web',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'playground-web';

  constructor(private router: Router) {}
  printRouter() {
    console.log(this.router.config);
  }
}
