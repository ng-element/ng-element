import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    NelSliderModule
  ]
})

export class NelDemoSliderModule { }
