import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelTimePickerComponent } from './time-picker.component';
import { NelTimePickerPanelComponent } from './time-picker-panel.component';

@NgModule({
  declarations: [
    NelTimePickerComponent,
    NelTimePickerPanelComponent
  ],
  exports: [
    NelTimePickerComponent,
    NelTimePickerPanelComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelTimePickerModule { }
