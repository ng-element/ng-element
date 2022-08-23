import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    OverlayModule
  ]
})

export class NelColorPickerModule { }
