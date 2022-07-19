import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NelSliderModule } from 'ng-element-ui/slider';
import { NelDemoSliderBasicComponent } from './slider-demo-basic.component';

@NgModule({
  declarations: [
    NelDemoSliderBasicComponent
  ],
  exports: [
    NelDemoSliderBasicComponent
  ],
  imports: [
    CommonModule,
    NelSliderModule
  ]
})

export class NelDemoSliderModule { }
