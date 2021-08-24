import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-input-size',
  template: `
    <div class="demo-input-size">
      <nel-input
        [nelPlaceHolder]="'请输入内容'"
        suffix-icon="el-icon-date"
        [(ngModel)]="input1">
      </nel-input>
      <nel-input
        [nelSize]="'medium'"
        [nelPlaceHolder]="'请输入内容'"
        suffix-icon="el-icon-date"
        [(ngModel)]="input2">
      </nel-input>
      <nel-input
        [nelSize]="'small'"
        [nelPlaceHolder]="'请输入内容'"
        suffix-icon="el-icon-date"
        [(ngModel)]="input3">
      </nel-input>
      <nel-input
        [nelSize]="'mini'"
        [nelPlaceHolder]="'请输入内容'"
        suffix-icon="el-icon-date"
        [(ngModel)]="input4">
      </nel-input>
    </div>
  `,
  styles: [
    `
    .el-input {
      width: 180px;
      vertical-align: top;
      margin: 0 10px 10px 0;
    }
    `
  ]
})

export class NelDemoInputSizeComponent {
  input1 = '';
  input2 = '';
  input3 = '';
  input4 = '';
}
