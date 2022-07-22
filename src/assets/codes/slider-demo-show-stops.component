import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-slider-show-stops',
  template: `
    <div class="slider-demo-block">
      <span class="demonstration">Breakpoints not displayed</span>
      <nel-slider [(ngModel)]="value1" [step]="10"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Breakpoints displayed</span>
      <nel-slider [(ngModel)]="value2" [step]="10" [showStops]="true"></nel-slider>
    </div>
  `,
  styles: [`
    .slider-demo-block {
      display: flex;
      align-items: center;
    }
    .slider-demo-block .demonstration {
      font-size: 14px;
      color: var(--el-text-color-secondary);
      line-height: 44px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0;
    }
    .slider-demo-block .demonstration+nel-slider {
      flex: 0 0 70%;
    }
  `]
})

export class NelDemoSliderShowStopsComponent {
  value1 = 0;
  value2 = 0;
}
