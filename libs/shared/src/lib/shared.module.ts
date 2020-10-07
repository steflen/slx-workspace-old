import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedFontawesomeModule } from '@slx/shared-fontawesome';
import { SharedMaterialModule } from '@slx/shared-material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    SharedFontawesomeModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // flex-layout is for creating flex layouts (super easy to learn)
    FlexLayoutModule,
    // angular material
    SharedMaterialModule,
    // fontawesome icons
    SharedFontawesomeModule,
  ],
})
export class SharedModule {}
