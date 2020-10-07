import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  // just including the whole font awesome "solid" pack
  fas,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  exports: [FontAwesomeModule],
  imports: [FontAwesomeModule],
})
export class SharedFontawesomeModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    //add single icons like this
    //library.addIcons(faCoffee);
  }
}
