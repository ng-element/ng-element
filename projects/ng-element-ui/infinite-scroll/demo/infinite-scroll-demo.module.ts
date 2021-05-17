import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelInfiniteScrollModule } from 'ng-element-ui/infinite-scroll';
import { DemoInfiniteScrollBasicComponent } from './infinite-scroll-demo-basic.component';
import { DemoInfiniteScrollDisabledComponent } from './infinite-scroll-demo-disabled.component';

@NgModule({
  declarations: [
    DemoInfiniteScrollBasicComponent,
    DemoInfiniteScrollDisabledComponent
  ],
  exports: [
    DemoInfiniteScrollBasicComponent,
    DemoInfiniteScrollDisabledComponent
  ],
  imports: [
    CommonModule,
    NelInfiniteScrollModule
  ]
})

export class NelDemoInfiniteScrollModule { }
