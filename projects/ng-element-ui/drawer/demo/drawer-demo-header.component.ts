import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-drawer-header',
  template: `
    <button nel-button (click)="drawer = true" [nelType]="'primary'" style="margin-left: 16px;">
      点我打开
    </button>

    <nel-drawer
      [nelTitle]="'我是标题'"
      [(nelVisible)]="drawer"
      [nelWithHeader]="false">
      <span>我来啦!</span>
    </nel-drawer>
  `
})

export class NelDemoDrawerHeaderComponent {
  drawer = false;
}
