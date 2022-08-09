import { NgModule } from '@angular/core';
import { NelDemoDateTimePickerModule } from '../../../../projects/ng-element-ui/datetime-picker/demo/datetime-picker-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { DateTimePickerRoutingModule } from './datetime-picker-routing.module';
import { DateTimePickerComponent } from './datetime-picker.component';

@NgModule({
  declarations: [
    DateTimePickerComponent
  ],
  exports: [
    DateTimePickerComponent
  ],
  imports: [
    NelDemoDateTimePickerModule,
    SharedModule,
    DateTimePickerRoutingModule
  ]
})

export class DateTimePickerModule { }
