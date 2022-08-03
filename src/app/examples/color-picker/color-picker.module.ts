import { NgModule } from '@angular/core';
import { NelDemoColorPickerBasicModule } from '../../../../projects/ng-element-ui/color-picker/demo/color-picker-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { ColorPickerRoutingModule } from './color-picker-routing.module';
import { ColorPickerComponent } from './color-picker.component';

@NgModule({
  declarations: [
    ColorPickerComponent
  ],
  exports: [
    ColorPickerComponent
  ],
  imports: [
    NelDemoColorPickerBasicModule,
    SharedModule,
    ColorPickerRoutingModule
  ]
})

export class ColorPickerModule { }
