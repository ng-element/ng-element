import { NgModule } from '@angular/core';
import { RowDirective } from './row.directive';
import { ColDirective } from './col.directive';

@NgModule({
  declarations: [
    RowDirective,
    ColDirective
  ],
  exports: [
    RowDirective,
    ColDirective
  ],
})

export class LayoutModule { }
