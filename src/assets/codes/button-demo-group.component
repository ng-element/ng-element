import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-button-group',
    template: `
  <nel-button-group>
    <button nel-button [nelType]="'primary'" [nelIcon]="'arrow-left'">上一页</button>
    <button nel-button [nelType]="'primary'">下一页<i class="el-icon-arrow-right el-icon--right"></i></button>
  </nel-button-group>
  <nel-button-group>
    <button nel-button [nelType]="'primary'" [nelIcon]="'edit'"></button>
    <button nel-button [nelType]="'primary'" [nelIcon]="'share'"></button>
    <button nel-button [nelType]="'primary'" [nelIcon]="'delete'"></button>
  </nel-button-group>
  `,
    styles: [
        `
      .el-button-group+.el-button-group {
        margin-left: 10px;
      }
    `
    ],
    standalone: false
})

export class NelDemoButtonGroupComponent { }
