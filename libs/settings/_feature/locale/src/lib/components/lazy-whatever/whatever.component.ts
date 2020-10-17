import { Component } from '@angular/core';
import { LocaleFacade } from '@slx/settings-domain';

@Component({
  selector: 'slx-language',
  templateUrl: './whatever.component.html',
  styleUrls: ['./whatever.component.scss'],
})
export class WhateverComponent {
  constructor(private localeFacade: LocaleFacade) {
    console.log('🔥 Loaded WAHTERVER');
  }
}
