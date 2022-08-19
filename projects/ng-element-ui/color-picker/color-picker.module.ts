import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelColorPickerComponent } from './color-picker.component';
import { NelColorPickerDropdownComponent } from './color-picker-dropdown.component';

@NgModule({
  declarations: [
    NelColorPickerComponent,
    NelColorPickerDropdownComponent
  ],
  exports: [
    NelColorPickerComponent,
    NelColorPickerDropdownComponent
  ],
  imports: [
    CommonModule,
    OverlayModule
  ]
})

export class NelColorPickerModule { }
