import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelDatePickerComponent } from './date-picker.component';

@NgModule({
  declarations: [
    NelDatePickerComponent
  ],
  exports: [
    NelDatePickerComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelDatePickerModule { }
