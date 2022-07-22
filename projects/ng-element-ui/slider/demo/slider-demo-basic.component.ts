import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-slider-basic',
  template: `
    <nel-slider [(ngModel)]="value1"></nel-slider>
    <nel-slider [(ngModel)]="value2"></nel-slider>
  `
})

export class NelDemoSliderBasicComponent {
  value1 = 0;
  value2 = 10;
}
