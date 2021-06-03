import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelOutletModule } from 'ng-element-ui/core/outlet';
import { NelSkeletonComponent } from './skeleton.component';
import { NelSkeletonItemComponent } from './skeleton-item.component';

@NgModule({
  declarations: [
    NelSkeletonComponent,
    NelSkeletonItemComponent
  ],
  exports: [
    NelSkeletonComponent,
    NelSkeletonItemComponent
  ],
  imports: [
    CommonModule,
    NelOutletModule
  ]
})

export class NelSkeletonModule { }
