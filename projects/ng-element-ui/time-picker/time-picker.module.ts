import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelTimePickerComponent } from './time-picker.component';

@NgModule({
  declarations: [
    NelTimePickerComponent
  ],
  exports: [
    NelTimePickerComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelTimePickerModule { }
