import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelCalendarModule } from 'ng-element-ui/calendar';
import { NelDemoCalendarBasicComponent } from './calendar-demo-basic.component';
import { NelDemoCalendarCellComponent } from './calendar-demo-cell.component';
import { NelDemoCalendarRangComponent } from './calendar-demo-rang.component';

@NgModule({
  declarations: [
    NelDemoCalendarBasicComponent,
    NelDemoCalendarCellComponent,
    NelDemoCalendarRangComponent
  ],
  exports: [
    NelDemoCalendarBasicComponent,
    NelDemoCalendarCellComponent,
    NelDemoCalendarRangComponent
  ],
  imports: [
    FormsModule,
    NelCalendarModule
  ]
})

export class NelDemoCalendarModule { }
