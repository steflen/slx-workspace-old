import { Component } from '@angular/core';
import { LookAndFeelFacade } from '@slx/settings-domain';

@Component({
  selector: 'slx-settings-feature-look-and-feel',
  templateUrl: './look-and-feel.component.html',
  styleUrls: ['./look-and-feel.component.scss'],
})
export class LookAndFeelComponent {
  constructor(private lookAndFeelFacade: LookAndFeelFacade) {}
}
