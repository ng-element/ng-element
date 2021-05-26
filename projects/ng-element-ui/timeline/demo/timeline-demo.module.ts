import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelTimelineModule } from 'ng-element-ui/timeline';
import { NelCardModule } from 'ng-element-ui/card';
import { NelDemoTimelineBasicComponent } from './timeline-demo-basic.component';
import { NelDemoTimelineNodeComponent } from './timeline-demo-node.component';
import { NelDemoTimelineTimestampComponent } from './timeline-demo-timestamp.component';

@NgModule({
  declarations: [
    NelDemoTimelineBasicComponent,
    NelDemoTimelineNodeComponent,
    NelDemoTimelineTimestampComponent
  ],
  exports: [
    NelDemoTimelineBasicComponent,
    NelDemoTimelineNodeComponent,
    NelDemoTimelineTimestampComponent
  ],
  imports: [
    CommonModule,
    NelTimelineModule,
    NelCardModule
  ]
})

export class NelDemoTimelineModule { }
