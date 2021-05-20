import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTimelineModule } from 'ng-element-ui/timeline';
import { NelCardModule } from 'ng-element-ui/card';
import { DemoTimelineBasicComponent } from './timeline-demo-basic.component';
import { DemoTimelineNodeComponent } from './timeline-demo-node.component';
import { DemoTimelineTimestampComponent } from './timeline-demo-timestamp.component';

@NgModule({
  declarations: [
    DemoTimelineBasicComponent,
    DemoTimelineNodeComponent,
    DemoTimelineTimestampComponent
  ],
  exports: [
    DemoTimelineBasicComponent,
    DemoTimelineNodeComponent,
    DemoTimelineTimestampComponent
  ],
  imports: [
    CommonModule,
    NelTimelineModule,
    NelCardModule
  ]
})

export class NelDemoTimelineModule { }
