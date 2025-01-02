import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-tag-size',
    template: `
    <nel-tag nelClosable>默认标签</nel-tag>
    <nel-tag [nelSize]="'medium'" nelClosable>中等标签</nel-tag>
    <nel-tag [nelSize]="'small'" nelClosable>小型标签</nel-tag>
    <nel-tag [nelSize]="'mini'" nelClosable>超小标签</nel-tag>
  `,
    styles: [
        `
      .el-tag+.el-tag {
        margin-left: 10px;
      }
    `
    ],
    standalone: false
})

export class NelDemoTagSizeComponent { }
