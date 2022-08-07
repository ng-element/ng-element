import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelDatePickerModule } from 'ng-element-ui/date-picker';
import { NelDemoDatePickerBasicComponent } from './date-picker-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoDatePickerBasicComponent
  ],
  exports: [
    NelDemoDatePickerBasicComponent
  ],
  imports: [
    CommonModule,
    NelDatePickerModule
  ]
})

export class NelDemoDatePickerModule { }
