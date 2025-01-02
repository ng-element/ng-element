import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-button-size',
    template: `
  <div nel-row>
    <button nel-button>默认按钮</button>
    <button nel-button [nelSize]="'medium'">中等按钮</button>
    <button nel-button [nelSize]="'small'">小型按钮</button>
    <button nel-button [nelSize]="'mini'">超小按钮</button>
  </div>
  <div nel-row>
    <button nel-button nelRound>默认按钮</button>
    <button nel-button [nelSize]="'medium'" nelRound>中等按钮</button>
    <button nel-button [nelSize]="'small'" nelRound>小型按钮</button>
    <button nel-button [nelSize]="'mini'" nelRound>超小按钮</button>
  </div>
  `,
    styles: [
        `
      .el-row {
        margin-bottom: 20px;
        align-items: baseline;
      }

      .el-row:last-child {
        margin-bottom: 0;
      }
    `
    ],
    standalone: false
})

export class NelDemoButtonSizeComponent { }
