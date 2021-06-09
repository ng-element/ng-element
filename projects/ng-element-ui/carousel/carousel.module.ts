import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelCarouselComponent } from './carousel.component';
import { NelCarouselItemComponent } from './carousel-item.component';

@NgModule({
  declarations: [
    NelCarouselComponent,
    NelCarouselItemComponent
  ],
  exports: [
    NelCarouselComponent,
    NelCarouselItemComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    NelButtonModule
  ]
})

export class NelCarouselModule { }
