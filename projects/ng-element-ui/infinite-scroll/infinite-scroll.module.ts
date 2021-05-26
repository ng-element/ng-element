import { NgModule } from '@angular/core';
import { NelInfiniteScrollDirective } from './infinite-scroll.directive';

@NgModule({
  declarations: [
    NelInfiniteScrollDirective
  ],
  exports: [
    NelInfiniteScrollDirective
  ]
})

export class NelInfiniteScrollModule { }
