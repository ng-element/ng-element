import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-rate-basic',
  template: `
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <nel-rate [(ngModel)]="value1"></nel-rate>
    </div>
    <!-- <div class="block">
      <span class="demonstration">区分颜色</span>
      <nel-rate [(ngModel)]="value2" [nelColors]="colors"></nel-rate>
    </div> -->
  `,
  styles: [
    `
      .block {
        padding: 30px 0;
        text-align: center;
        border-right: 1px solid #eff2f6;
        display: inline-block;
        width: 49%;
        box-sizing: border-box;
      }

      .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }
    `
  ]
})

export class NelDemoRateBasicComponent {
  value1 = null;
  value2 = null;
  colors = ['#99A9BF', '#F7BA2A', '#FF9900'];
}
