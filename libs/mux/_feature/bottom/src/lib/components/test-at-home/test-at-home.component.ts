import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-test-at-else',
  templateUrl: './test-at-home.component.html',
  styleUrls: ['./test-at-home.component.scss'],
})
export class TestAtElseComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(' INIT TestAtElseComponent');
    console.log(this.router);
  }
}
