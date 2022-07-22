import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTooltipModule } from 'ng-element-ui/tooltip';
import { NelSliderComponent } from './slider.component';

@NgModule({
  declarations: [
    NelSliderComponent
  ],
  exports: [
    NelSliderComponent
  ],
  imports: [
    CommonModule,
    NelTooltipModule
  ]
})

export class NelSliderModule { }
