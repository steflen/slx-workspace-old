import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-extra-web-layout',
  templateUrl: './extra-web-layout.component.html',
  styleUrls: ['./extra-web-layout.component.scss'],
})
export class ExtraWebLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(' INIT EXTRA');
    console.log(this.router.config);
  }
}
