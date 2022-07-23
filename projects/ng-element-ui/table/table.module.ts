import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTableComponent } from './table.component';
import { NelTableColumnComponent } from './table-column.component';

@NgModule({
  declarations: [
    NelTableComponent,
    NelTableColumnComponent
  ],
  exports: [
    NelTableComponent,
    NelTableColumnComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelTableModule { }
