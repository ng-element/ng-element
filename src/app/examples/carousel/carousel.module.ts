import { NgModule } from '@angular/core';
import { NelDemoCarouselModule } from '../../../../projects/ng-element-ui/carousel/demo/carousel-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ],
  imports: [
    NelDemoCarouselModule,
    SharedModule,
    CarouselRoutingModule
  ]
})

export class CarouselModule { }
