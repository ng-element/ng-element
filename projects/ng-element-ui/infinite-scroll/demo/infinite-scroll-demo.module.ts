import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelInfiniteScrollModule } from 'ng-element-ui/infinite-scroll';
import { NelDemoInfiniteScrollBasicComponent } from './infinite-scroll-demo-basic.component';
import { NelDemoInfiniteScrollDisabledComponent } from './infinite-scroll-demo-disabled.component';

@NgModule({
  declarations: [
    NelDemoInfiniteScrollBasicComponent,
    NelDemoInfiniteScrollDisabledComponent
  ],
  exports: [
    NelDemoInfiniteScrollBasicComponent,
    NelDemoInfiniteScrollDisabledComponent
  ],
  imports: [
    CommonModule,
    NelInfiniteScrollModule
  ]
})

export class NelDemoInfiniteScrollModule { }
