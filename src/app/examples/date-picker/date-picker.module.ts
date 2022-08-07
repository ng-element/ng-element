import { NgModule } from '@angular/core';
import { NelDemoDatePickerModule } from '../../../../projects/ng-element-ui/date-picker/demo/date-picker-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { DatePickerRoutingModule } from './date-picker-routing.module';
import { DatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [
    DatePickerComponent
  ],
  exports: [
    DatePickerComponent
  ],
  imports: [
    NelDemoDatePickerModule,
    SharedModule,
    DatePickerRoutingModule
  ]
})

export class DatePickerModule { }
