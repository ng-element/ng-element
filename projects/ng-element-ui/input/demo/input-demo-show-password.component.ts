import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-input-show-password',
    template: `
    <nel-input [nelPlaceHolder]="'请输入密码'" [(ngModel)]="input" nelShowPassword></nel-input>
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

export class NelDemoInputShowPasswordComponent {
  input = '';
}
