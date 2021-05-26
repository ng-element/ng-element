import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-timeline-basic',
  template: `
    <div class="block">
      <nel-timeline>
        <nel-timeline-item
          *ngFor="let activity of activities"
          [nelTimestamp]="activity.timestamp">
          {{activity.content}}
        </nel-timeline-item>
      </nel-timeline>
    </div>
  `
})

export class NelDemoTimelineBasicComponent {
  activities = [{
    content: '活动按期开始',
    timestamp: '2018-04-15'
  }, {
    content: '通过审核',
    timestamp: '2018-04-13'
  }, {
    content: '创建成功',
    timestamp: '2018-04-11'
  }];
}
