import { NgModule } from '@angular/core';
import { NelDemoCalendarModule } from '../../../../projects/ng-element-ui/calendar/demo/calendar-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [
    CalendarComponent
  ],
  exports: [
    CalendarComponent
  ],
  imports: [
    NelDemoCalendarModule,
    SharedModule,
    CalendarRoutingModule
  ]
})

export class CalendarModule { }
