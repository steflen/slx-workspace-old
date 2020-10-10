import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgPipesModule } from 'ngx-pipes';
import { HoverStyleDirective } from './directives/hover-style.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgPipesModule,
    FlexLayoutModule,
    // SharedMaterialModule,
    // SharedFontawesomeModule,
    // NgxMaterialTimepickerModule,
  ],
  declarations: [HoverStyleDirective],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    NgPipesModule,
    FlexLayoutModule,
    // SharedMaterialModule,
    // SharedFontawesomeModule,
    HoverStyleDirective,
    // NgxMaterialTimepickerModule,
  ],
})
export class SharedModule {
  // static forRoot(): ModuleWithProviders<any> {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [],
  //   };
  // }
}
