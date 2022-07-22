import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NelSliderModule } from 'ng-element-ui/slider';
import { NelDemoSliderBasicComponent } from './slider-demo-basic.component';
import { NelDemoSliderPlacementComponent } from './slider-demo-placement.component';
import { NelDemoSliderShowStopsComponent } from './slider-demo-show-stops.component';

@NgModule({
  declarations: [
    NelDemoSliderBasicComponent,
    NelDemoSliderPlacementComponent,
    NelDemoSliderShowStopsComponent
  ],
  exports: [
    NelDemoSliderBasicComponent,
    NelDemoSliderPlacementComponent,
    NelDemoSliderShowStopsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NelSliderModule
  ]
})

export class NelDemoSliderModule { }
