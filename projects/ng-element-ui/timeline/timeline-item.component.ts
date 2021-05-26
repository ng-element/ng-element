import { Component, Input } from '@angular/core';

@Component({
  selector: 'nel-timeline-item',
  templateUrl: './timeline-item.component.html',
  host: {
    'class': 'el-timeline-item'
  }
})

export class NelTimelineItemComponent {
  @Input() nelTimestamp!: string;
  @Input() nelSize?: string = 'normal';
  @Input() nelColor?: 'hsl' | 'hsv' | 'hex' | 'rgb' | string;
  @Input() nelType?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | string;
  @Input() nelIcon?: string;
  @Input() nelPlacement?: 'top' | 'bottom';
  @Input() nelHideTimestamp = false;
}
