import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-settings-web-layout',
  templateUrl: './settings-web-layout.component.html',
  styleUrls: ['./settings-web-layout.component.scss'],
})
export class SettingsWebLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(' INIT SETTINGS');
    console.log(this.router.config);
  }
}
