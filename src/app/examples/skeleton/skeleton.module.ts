import { NgModule } from '@angular/core';
import { NelDemoSkeletonModule } from '../../../../projects/ng-element-ui/skeleton/demo/skeleton-demo.module';
import { SharedModule } from '../../shared/shared.module';
import { SkeletonRoutingModule } from './skeleton-routing.module';
import { SkeletonComponent } from './skeleton.component';

@NgModule({
  declarations: [
    SkeletonComponent
  ],
  exports: [
    SkeletonComponent
  ],
  imports: [
    NelDemoSkeletonModule,
    SharedModule,
    SkeletonRoutingModule
  ]
})

export class SkeletonModule { }
