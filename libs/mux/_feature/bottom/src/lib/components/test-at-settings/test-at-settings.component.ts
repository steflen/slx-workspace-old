import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-test-at-settings',
  templateUrl: './test-at-settings.component.html',
  styleUrls: ['./test-at-settings.component.scss'],
})
export class TestAtSettingsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(' INIT TestAtSETTINGSComponent');
    console.log(this.router);
  }
}
