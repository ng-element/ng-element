import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-slider-placement',
  template: `
    <div class="slider-demo-block">
      <nel-slider [(ngModel)]="value1"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <nel-slider [(ngModel)]="value2" placement="bottom"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <nel-slider [(ngModel)]="value2" placement="right"></nel-slider>
    </div>
    <div class="slider-demo-block">
      <nel-slider [(ngModel)]="value3" placement="left"></nel-slider>
    </div>
  `,
  styles: [`
    .slider-demo-block {
      display: flex;
      align-items: center;
    }
    .slider-demo-block nel-slider {
      flex: 1;
    }
  `]
})

export class NelDemoSliderPlacementComponent {
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
}
