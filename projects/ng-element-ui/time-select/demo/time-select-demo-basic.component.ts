import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-time-select-basic',
  template: `
    <nel-time-select></nel-time-select>
  `,
  styles: [
    `
      .el-tag+.el-tag {
        margin-left: 10px;
      }
    `
  ]
})

export class NelDemoTimeSelectBasicComponent { }
