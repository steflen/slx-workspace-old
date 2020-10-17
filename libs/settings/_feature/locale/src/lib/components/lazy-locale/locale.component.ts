import { Component } from '@angular/core';
import { LocaleFacade } from '@slx/settings-domain';

@Component({
  selector: 'slx-language',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss'],
})
export class LocaleComponent {
  constructor(private localeFacade: LocaleFacade) {
    console.log('🔥 Loaded DynamicLazyComponent');
  }
}
