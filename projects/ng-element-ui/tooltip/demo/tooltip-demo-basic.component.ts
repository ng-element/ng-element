import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tooltip-basic',
  template: `
    <div class="box">
      <div class="top">
        <button nel-button class="item" nel-tooltip [nelContent]="'Top Left 提示文字'" [nelPlacement]="'top-start'">上左</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Top Center 提示文字'" [nelPlacement]="'top'">上边</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Top Right 提示文字'" [nelPlacement]="'top-end'">上右</button>
      </div>
      <div class="left">
        <button nel-button class="item" nel-tooltip [nelContent]="'Left Top 提示文字'" [nelPlacement]="'left-start'">左上</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Left Center 提示文字'" [nelPlacement]="'left'">左边</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Left Bottom 提示文字'" [nelPlacement]="'left-end'">左下</button>
      </div>
      <div class="right">
        <button nel-button class="item" nel-tooltip [nelContent]="'Righ  Top 提示文字'" [nelPlacement]="'right-start'">右上</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Right Center 提示文字'" [nelPlacement]="'right'">右边</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Right Bottom 提示文字'" [nelPlacement]="'right-end'">右下</button>
      </div>
      <div class="bottom">
        <button nel-button class="item" nel-tooltip [nelContent]="'Bottom Left 提示文字'" [nelPlacement]="'bottom-start'">下左</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Bottom Center 提示文字'" [nelPlacement]="'bottom'">下边</button>
        <button nel-button class="item" nel-tooltip [nelContent]="'Bottom Right 提示文字'" [nelPlacement]="'bottom-end'">下右</button>
      </div>
    </div>
  `,
  styles: [
    `
      .box {
        width: 400px;
      }

      .top {
        text-align: center;
      }

      .left {
        float: left;
        width: 60px;
      }

      .right {
        float: right;
        width: 60px;
      }

      .bottom {
        clear: both;
        text-align: center;
      }

      .item {
        margin: 4px;
      }

      .left .el-tooltip__popper,
      .right .el-tooltip__popper {
        padding: 8px 10px;
      }
    `
  ]
})

export class NelDemoTooltipBasicComponent { }
