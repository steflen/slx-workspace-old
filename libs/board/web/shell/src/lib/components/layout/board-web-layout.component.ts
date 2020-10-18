import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-board-web-layout',
  templateUrl: './board-web-layout.component.html',
  styleUrls: ['./board-web-layout.component.scss'],
})
export class BoardWebLayoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(' INIT BOARD');
    console.log(this.router.config);
  }
}
