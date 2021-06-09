import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelCarouselModule } from 'ng-element-ui/carousel';
import { NelDemoCarouselBasicComponent } from './carousel-demo-basic.component';
import { NelDemoCarouselIndicatorComponent } from './carousel-demo-indicator.component';
import { NelDemoCarouselArrowComponent } from './carousel-demo-arrow.component';
import { NelDemoCarouselCardComponent } from './carousel-demo-card.component';
import { NelDemoCarouselDirectionComponent } from './carousel-demo-direction.component';

@NgModule({
  declarations: [
    NelDemoCarouselBasicComponent,
    NelDemoCarouselIndicatorComponent,
    NelDemoCarouselArrowComponent,
    NelDemoCarouselCardComponent,
    NelDemoCarouselDirectionComponent
  ],
  exports: [
    NelDemoCarouselBasicComponent,
    NelDemoCarouselIndicatorComponent,
    NelDemoCarouselArrowComponent,
    NelDemoCarouselCardComponent,
    NelDemoCarouselDirectionComponent
  ],
  imports: [
    CommonModule,
    NelCarouselModule
  ]
})

export class NelDemoCarouselModule { }
