import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-drawer-multi',
  template: `
    <button nel-button (click)="drawer = true" [nelType]="'primary'" style="margin-left: 16px;">
      点我打开
    </button>

    <nel-drawer
      [nelTitle]="'我是外面的 Drawer'"
      [(nelVisible)]="drawer"
      [nelSize]="'50%'">
      <div>
        <button nel-button (click)="innerDrawer = true">打开里面的!</button>
        <nel-drawer
          [nelTitle]="'我是里面的'"
          :before-close="handleClose"
          [(nelVisible)]="innerDrawer">
          <p>_(:зゝ∠)_</p>
        </nel-drawer>
      </div>
    </nel-drawer>
  `
})

export class NelDemoDrawerMultiComponent {
  drawer = false;
  innerDrawer = false;
}
