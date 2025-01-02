import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-input-clearable',
    template: `
    <nel-input [nelPlaceHolder]="'请输入内容'" [(ngModel)]="input" nelClearable></nel-input>
  `,
    styles: [
        `
    .el-input {
      width: 180px;
    }
    `
    ],
    standalone: false
})

export class NelDemoInputClearableComponent {
  input = '';
}
