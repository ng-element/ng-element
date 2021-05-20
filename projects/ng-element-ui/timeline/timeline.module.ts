import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { TimelineComponent } from './timeline.component';
import { TimelineItemComponent } from './timeline-item.component';

@NgModule({
  declarations: [
    TimelineComponent,
    TimelineItemComponent
  ],
  exports: [
    TimelineComponent,
    TimelineItemComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelTimelineModule { }
