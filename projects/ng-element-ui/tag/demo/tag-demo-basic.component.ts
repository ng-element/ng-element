import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tag-basic',
  template: `
    <nel-tag>标签一</nel-tag>
    <nel-tag [nelType]="'success'">标签二</nel-tag>
    <nel-tag [nelType]="'info'">标签三</nel-tag>
    <nel-tag [nelType]="'warning'">标签四</nel-tag>
    <nel-tag [nelType]="'danger'">标签五</nel-tag>
  `,
  styles: [
    `
      .el-tag+.el-tag {
        margin-left: 10px;
      }
    `
  ]
})

export class NelDemoTagBasicComponent { }
