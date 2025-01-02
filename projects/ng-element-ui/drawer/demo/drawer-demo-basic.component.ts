import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-drawer-basic',
    template: `
    <nel-radio-group [(ngModel)]="direction">
      <label nel-radio [nelValue]="'ltr'">从左往右开</label>
      <label nel-radio [nelValue]="'rtl'">从右往左开</label>
      <label nel-radio [nelValue]="'ttb'">从上往下开</label>
      <label nel-radio [nelValue]="'btt'">从下往上开</label>
    </nel-radio-group>

    <button nel-button (click)="drawer = true" [nelType]="'primary'" style="margin-left: 16px;">
      点我打开
    </button>

    <nel-drawer
      [nelTitle]="'我是标题'"
      [(nelVisible)]="drawer"
      [nelDirection]="direction"
      :before-close="handleClose" destroy-on-close>
      <span>我来啦!</span>
    </nel-drawer>
  `,
    standalone: false
})

export class NelDemoDrawerBasicComponent {
  drawer = false;
  direction = 'rtl';
}
