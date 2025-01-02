import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-dropdown-size',
    template: `
    <div class="nel-dropdown">
      <div>
        <nel-button-group>
          <button nel-button [nelType]="'primary'">上一页</button>
          <button nel-button [nelType]="'primary'" nel-dropdown [nelDropdownMenu]="menu1"><i class="el-icon-arrow-down el-icon--down"></i></button>
        </nel-button-group>
      </div>
      <div>
        <nel-button-group>
          <button nel-button [nelType]="'primary'" [nelSize]="'medium'">上一页</button>
          <button nel-button [nelType]="'primary'" [nelSize]="'medium'" nel-dropdown [nelDropdownSize]="'medium'" [nelDropdownMenu]="menu2"><i class="el-icon-arrow-down el-icon--down"></i></button>
        </nel-button-group>
      </div>
      <div>
        <nel-button-group>
          <button nel-button [nelType]="'primary'" [nelSize]="'small'">上一页</button>
          <button nel-button [nelType]="'primary'" [nelSize]="'small'" nel-dropdown [nelDropdownSize]="'small'" [nelDropdownMenu]="menu3"><i class="el-icon-arrow-down el-icon--down"></i></button>
        </nel-button-group>
      </div>
      <div>
        <nel-button-group>
          <button nel-button [nelType]="'primary'" [nelSize]="'mini'">上一页</button>
          <button nel-button [nelType]="'primary'" [nelSize]="'mini'" nel-dropdown [nelDropdownSize]="'mini'" [nelDropdownMenu]="menu4"><i class="el-icon-arrow-down el-icon--down"></i></button>
        </nel-button-group>
      </div>
    </div>
    <nel-dropdown-menu #menu1="nelDropdownMenu">
      <nel-dropdown-item>黄金糕</nel-dropdown-item>
      <nel-dropdown-item>狮子头</nel-dropdown-item>
      <nel-dropdown-item>螺蛳粉</nel-dropdown-item>
      <nel-dropdown-item>双皮奶</nel-dropdown-item>
      <nel-dropdown-item>蚵仔煎</nel-dropdown-item>
    </nel-dropdown-menu>
    <nel-dropdown-menu #menu2="nelDropdownMenu">
      <nel-dropdown-item>黄金糕</nel-dropdown-item>
      <nel-dropdown-item>狮子头</nel-dropdown-item>
      <nel-dropdown-item>螺蛳粉</nel-dropdown-item>
      <nel-dropdown-item>双皮奶</nel-dropdown-item>
      <nel-dropdown-item>蚵仔煎</nel-dropdown-item>
    </nel-dropdown-menu>
    <nel-dropdown-menu #menu3="nelDropdownMenu">
      <nel-dropdown-item>黄金糕</nel-dropdown-item>
      <nel-dropdown-item>狮子头</nel-dropdown-item>
      <nel-dropdown-item>螺蛳粉</nel-dropdown-item>
      <nel-dropdown-item>双皮奶</nel-dropdown-item>
      <nel-dropdown-item>蚵仔煎</nel-dropdown-item>
    </nel-dropdown-menu>
    <nel-dropdown-menu #menu4="nelDropdownMenu">
      <nel-dropdown-item>黄金糕</nel-dropdown-item>
      <nel-dropdown-item>狮子头</nel-dropdown-item>
      <nel-dropdown-item>螺蛳粉</nel-dropdown-item>
      <nel-dropdown-item>双皮奶</nel-dropdown-item>
      <nel-dropdown-item>蚵仔煎</nel-dropdown-item>
    </nel-dropdown-menu>
  `,
    styles: [
        `
      .nel-dropdown {
        display: flex;
        align-items: center;
      }

      .nel-dropdown div {
        margin-right: 20px;
      }
    `
    ],
    standalone: false
})

export class NelDemoDropdownSizeComponent { }
