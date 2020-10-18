import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'slx-test-at-board',
  templateUrl: './test-at-board.component.html',
  styleUrls: ['./test-at-board.component.scss'],
})
export class TestAtBoardComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(' INIT TestAtBoardComponent');
    console.log(this.router);
  }
}
