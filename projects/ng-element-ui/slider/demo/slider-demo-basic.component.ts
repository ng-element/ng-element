import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-slider-basic',
    template: `
    <div class="slider-demo-block">
      <span class="demonstration">Default value</span>
      <nel-slider [(ngModel)]="value1"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Customized initial value</span>
      <nel-slider [(ngModel)]="value2"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Hide Tooltip</span>
      <nel-slider [(ngModel)]="value3" [showTooltip]="false"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <span class="demonstration">Format Tooltip</span>
      <nel-slider [(ngModel)]="value4" [format]="format"></nel-slider>
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
  `],
    standalone: false
})

export class NelDemoSliderBasicComponent {
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;
  format = (val: number) => {
    return val / 100;
  }
}
