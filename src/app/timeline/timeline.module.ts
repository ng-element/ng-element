import { NgModule } from '@angular/core';
import { NelDemoTimelineModule } from './../../../projects/ng-element-ui/timeline/demo/timeline-demo.module';
import { ShareModule } from './../shared/shared.module';
import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';

@NgModule({
  declarations: [
    TimelineComponent
  ],
  exports: [
    TimelineComponent
  ],
  imports: [
    NelDemoTimelineModule,
    ShareModule,
    TimelineRoutingModule
  ]
})

export class TimelineModule { }
