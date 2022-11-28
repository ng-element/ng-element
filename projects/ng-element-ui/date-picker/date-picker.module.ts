import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelDatePickerComponent } from './date-picker.component';
import { NelDatePickerPanelComponent } from './date-picker-panel.component';

@NgModule({
  declarations: [
    NelDatePickerComponent,
    NelDatePickerPanelComponent
  ],
  exports: [
    NelDatePickerComponent,
    NelDatePickerPanelComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelDatePickerModule { }
