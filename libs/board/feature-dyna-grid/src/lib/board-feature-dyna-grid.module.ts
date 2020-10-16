import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedMaterialModule } from '@slx/shared-material';
import { SharedTranslationModule, TranslocoHttpLoader } from '@slx/shared-translation';
import { BoardFeatureDynaGridComponent } from './components/dyna-grid/dyna-grid.component';

@NgModule({
  imports: [
    CommonModule,
    SharedMaterialModule,
    SharedTranslationModule.forChild('boardFeatureDynaGrid', TranslocoHttpLoader),
  ],
  declarations: [BoardFeatureDynaGridComponent],
  exports: [BoardFeatureDynaGridComponent],
})
export class BoardFeatureDynaGridModule {}
