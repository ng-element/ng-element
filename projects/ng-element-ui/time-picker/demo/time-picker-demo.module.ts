import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTimePickerModule } from 'ng-element-ui/time-picker';
import { NelDemoTimePickerBasicComponent } from './time-picker-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoTimePickerBasicComponent
  ],
  exports: [
    NelDemoTimePickerBasicComponent
  ],
  imports: [
    CommonModule,
    NelTimePickerModule
  ]
})

export class NelDemoTimePickerModule { }
