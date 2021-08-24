import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-input-basic',
  template: `
    <nel-input [(ngModel)]="input" [nelPlaceHolder]="'请输入内容'"></nel-input>
  `,
  styles: [
    `
    .el-input {
      width: 180px;
    }
    `
  ]
})

export class NelDemoInputBasicComponent {
  input = '';
}
