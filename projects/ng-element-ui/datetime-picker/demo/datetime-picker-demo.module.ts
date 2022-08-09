import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelDatePickerModule } from 'ng-element-ui/date-picker';
import { NelDemoDateTimePickerBasicComponent } from './datetime-picker-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoDateTimePickerBasicComponent
  ],
  exports: [
    NelDemoDateTimePickerBasicComponent
  ],
  imports: [
    CommonModule,
    NelDatePickerModule
  ]
})

export class NelDemoDateTimePickerModule { }
