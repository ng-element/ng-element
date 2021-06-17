import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-dropdown-basic',
  template: `
    <span nel-dropdown [nelDropdownMenu]="menu" class="el-dropdown-link">
      下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <nel-dropdown-menu #menu="nelDropdownMenu">
      <nel-dropdown-item>黄金糕</nel-dropdown-item>
      <nel-dropdown-item>狮子头</nel-dropdown-item>
      <nel-dropdown-item>螺蛳粉</nel-dropdown-item>
      <nel-dropdown-item nelDisabled>双皮奶</nel-dropdown-item>
      <nel-dropdown-item nelDivided>蚵仔煎</nel-dropdown-item>
    </nel-dropdown-menu>
  `,
  styles: [
    `
      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
    `
  ]
})

export class NelDemoDropdownBasicComponent { }
