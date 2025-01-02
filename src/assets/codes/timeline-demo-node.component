import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-timeline-node',
    template: `
    <nel-timeline>
      <nel-timeline-item
        *ngFor="let activity of activities"
        [nelIcon]="activity.icon"
        [nelType]="activity.type"
        [nelColor]="activity.color"
        [nelSize]="activity.size"
        [nelTimestamp]="activity.timestamp">
        {{activity.content}}
      </nel-timeline-item>
    </nel-timeline>
  `,
    standalone: false
})

export class NelDemoTimelineNodeComponent {
  activities = [{
    content: '支持使用图标',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: 'more'
  }, {
    content: '支持自定义颜色',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87'
  }, {
    content: '支持自定义尺寸',
    timestamp: '2018-04-03 20:46',
    size: 'large'
  }, {
    content: '默认样式的节点',
    timestamp: '2018-04-03 20:46'
  }];
}
