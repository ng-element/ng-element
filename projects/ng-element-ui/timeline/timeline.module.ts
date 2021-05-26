import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NelIconModule } from 'ng-element-ui/icon';
import { NelTimelineComponent } from './timeline.component';
import { NelTimelineItemComponent } from './timeline-item.component';

@NgModule({
  declarations: [
    NelTimelineComponent,
    NelTimelineItemComponent
  ],
  exports: [
    NelTimelineComponent,
    NelTimelineItemComponent
  ],
  imports: [
    CommonModule,
    NelIconModule
  ]
})

export class NelTimelineModule { }
