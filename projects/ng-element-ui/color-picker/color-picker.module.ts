import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    NelColorPickerComponent
  ],
  exports: [
    NelColorPickerComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelColorPickerModule { }
