import { Component } from '@angular/core';
import { HoverlayFacade } from '@slx/board-domain';

@Component({
  selector: 'slx-board-feature-hoverlay',
  templateUrl: './hoverlay.component.html',
  styleUrls: ['./hoverlay.component.scss'],
})
export class HoverlayComponent {
  constructor(private hoverlayFacade: HoverlayFacade) {}
}
