import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-dropdown-trigger',
  template: `
    <div nel-row class="block-col-2">
      <div nel-col [nelSpan]="8">
        <span class="demonstration">hover 激活</span>
        <span nel-dropdown [nelDropdownMenu]="menu" class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
      <div nel-col [nelSpan]="8">
        <span class="demonstration">click 激活</span>
        <span nel-dropdown [nelDropdownTrigger]="'click'" [nelDropdownMenu]="menu" class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
      <div nel-col [nelSpan]="8">
        <span class="demonstration">右键(contextmenu) 激活</span>
        <span nel-dropdown [nelDropdownTrigger]="'contextmenu'" [nelDropdownMenu]="menu" class="el-dropdown-link">
          下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
      </div>
    </div>
    <nel-dropdown-menu #menu="nelDropdownMenu">
      <nel-dropdown-item [nelIcon]="'plus'">黄金糕</nel-dropdown-item>
      <nel-dropdown-item [nelIcon]="'circle-plus'">狮子头</nel-dropdown-item>
      <nel-dropdown-item [nelIcon]="'circle-plus-outline'">螺蛳粉</nel-dropdown-item>
      <nel-dropdown-item [nelIcon]="'check'">双皮奶</nel-dropdown-item>
      <nel-dropdown-item [nelIcon]="'circle-check'">蚵仔煎</nel-dropdown-item>
    </nel-dropdown-menu>
  `,
  styles: [
    `
      .block-col-2 {
        margin: -24px;
      }

      .block-col-2 .el-col {
        padding: 30px 0;
        text-align: center;
        border-right: 1px solid #eff2f6;
      }

      .block-col-2 .el-col:last-child {
        border-right: 0;
      }

      .demonstration {
        display: block;
        color: #8492a6;
        font-size: 14px;
        margin-bottom: 20px;
      }

      .el-dropdown-link {
        cursor: pointer;
        color: #409eff;
      }
    `
  ]
})

export class NelDemoDropdownTriggerComponent { }
