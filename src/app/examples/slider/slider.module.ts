import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NelDemoSliderModule } from '../../../../projects/ng-element-ui/slider/demo/slider-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';

@NgModule({
  declarations: [
    SliderComponent
  ],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    NelDemoSliderModule,
    SharedModule,
    SliderRoutingModule
  ]
})

export class SliderModule { }
