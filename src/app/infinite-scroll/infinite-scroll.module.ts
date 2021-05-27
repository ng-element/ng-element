import { NgModule } from '@angular/core';
import { NelDemoInfiniteScrollModule } from '../../../projects/ng-element-ui/infinite-scroll/demo/infinite-scroll-demo.module';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollRoutingModule } from './infinite-scroll-routing.module';
import { InfiniteScrollComponent } from './infinite-scroll.component';

@NgModule({
  declarations: [
    InfiniteScrollComponent
  ],
  exports: [
    InfiniteScrollComponent
  ],
  imports: [
    NelDemoInfiniteScrollModule,
    SharedModule,
    InfiniteScrollRoutingModule
  ]
})

export class InfiniteScrollModule { }
