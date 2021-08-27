import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-input-number-basic',
  template: `
    <nel-input-number [(ngModel)]="num" (ngModelChange)="handleChange($event)" [nelMin]="1" [nelMax]="10" label="描述文字"></nel-input-number>
  `,
  styles: [
    `
    :host ::ng-deep .el-input-number {
      position: relative;
      display: inline-block;
      width: 180px;
      line-height: 38px;
    }
    `
  ]
})

export class NelDemoInputNumberBasicComponent {
  num = 3;

  handleChange(value: number): void {
    console.log(value);
  }
}
