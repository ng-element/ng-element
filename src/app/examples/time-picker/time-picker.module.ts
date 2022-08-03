import { NgModule } from '@angular/core';
import { NelDemoTimePickerModule } from '../../../../projects/ng-element-ui/time-picker/demo/time-picker-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { TimePickerRoutingModule } from './time-picker-routing.module';
import { TimePickerComponent } from './time-picker.component';

@NgModule({
  declarations: [
    TimePickerComponent
  ],
  exports: [
    TimePickerComponent
  ],
  imports: [
    NelDemoTimePickerModule,
    SharedModule,
    TimePickerRoutingModule
  ]
})

export class TimePickerModule { }
