import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelSliderComponent } from './slider.component';

@NgModule({
  declarations: [
    NelSliderComponent
  ],
  exports: [
    NelSliderComponent
  ],
  imports: [
    CommonModule
  ]
})

export class NelSliderModule { }
