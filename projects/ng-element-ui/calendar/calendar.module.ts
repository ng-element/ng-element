import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCalendarComponent } from './calendar.component';
import { NelDateCellDirective } from './calendar-cell.component';

@NgModule({
  declarations: [
    NelCalendarComponent,
    NelDateCellDirective
  ],
  exports: [
    NelCalendarComponent,
    NelDateCellDirective
  ],
  imports: [
    CommonModule
  ]
})

export class NelCalendarModule { }
