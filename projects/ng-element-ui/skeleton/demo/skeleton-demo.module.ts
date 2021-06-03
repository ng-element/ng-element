import { NgModule } from '@angular/core';
import { NelSkeletonModule } from 'ng-element-ui/skeleton';
import { NelSpaceModule } from 'ng-element-ui/space';
import { NelCardModule } from 'ng-element-ui/card';
import { NelButtonModule } from 'ng-element-ui/button';
import { NelDemoSkeletonBasicComponent } from './skeleton-demo-basic.component';
import { NelDemoSkeletonRowsComponent } from './skeleton-demo-rows.component';
import { NelDemoSkeletonAnimatedComponent } from './skeleton-demo-animated.component';
import { NelDemoSkeletonTemplateComponent } from './skeleton-demo-template.component';
import { NelDemoSkeletonLoadingComponent } from './skeleton-demo-loading.component';
import { NelDemoSkeletonThrottleComponent } from './skeleton-demo-throttle.component';

@NgModule({
  declarations: [
    NelDemoSkeletonBasicComponent,
    NelDemoSkeletonRowsComponent,
    NelDemoSkeletonAnimatedComponent,
    NelDemoSkeletonTemplateComponent,
    NelDemoSkeletonLoadingComponent,
    NelDemoSkeletonThrottleComponent
  ],
  exports: [
    NelDemoSkeletonBasicComponent,
    NelDemoSkeletonRowsComponent,
    NelDemoSkeletonAnimatedComponent,
    NelDemoSkeletonTemplateComponent,
    NelDemoSkeletonLoadingComponent,
    NelDemoSkeletonThrottleComponent
  ],
  imports: [
    NelSkeletonModule,
    NelSpaceModule,
    NelCardModule,
    NelButtonModule
  ]
})

export class NelDemoSkeletonModule { }
