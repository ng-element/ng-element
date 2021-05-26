import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tag-size',
  template: `
    <nel-tag [nelClosable]="true">默认标签</nel-tag>
    <nel-tag [nelSize]="'medium'" [nelClosable]="true">中等标签</nel-tag>
    <nel-tag [nelSize]="'small'" [nelClosable]="true">小型标签</nel-tag>
    <nel-tag [nelSize]="'mini'" [nelClosable]="true">超小标签</nel-tag>
  `,
  styles: [
    `
      .el-tag+.el-tag {
        margin-left: 10px;
      }
    `
  ]
})

export class NelDemoTagSizeComponent { }
