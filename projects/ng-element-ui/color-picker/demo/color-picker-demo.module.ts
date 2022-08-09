import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NelColorPickerModule } from 'ng-element-ui/color-picker';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelDemoColorPickerBasicComponent } from './color-picker-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoColorPickerBasicComponent
  ],
  exports: [
    NelDemoColorPickerBasicComponent
  ],
  imports: [
    FormsModule,
    NelColorPickerModule,
    NelIconModule
  ]
})

export class NelDemoColorPickerModule { }
