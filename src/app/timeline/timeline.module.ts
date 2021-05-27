import { NgModule } from '@angular/core';
import { NelDemoTimelineModule } from './../../../projects/ng-element-ui/timeline/demo/timeline-demo.module';
import { SharedModule } from './../shared/shared.module';
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
    SharedModule,
    TimelineRoutingModule
  ]
})

export class TimelineModule { }
