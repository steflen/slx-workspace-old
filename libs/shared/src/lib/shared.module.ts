import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedFontawesomeModule } from '@slx/shared-fontawesome';
import { SharedMaterialModule } from '@slx/shared-material';
import { DateFnsModule } from 'ngx-date-fns';
import { NgPipesModule } from 'ngx-pipes';
import { HoverStyleDirective } from './directives/hover-style';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DateFnsModule,
    NgPipesModule,
    FlexLayoutModule,
    SharedMaterialModule,
    SharedFontawesomeModule,
  ],
  declarations: [HoverStyleDirective],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DateFnsModule,
    NgPipesModule,
    FlexLayoutModule,
    SharedMaterialModule,
    SharedFontawesomeModule,
    HoverStyleDirective,
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
