import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-divider-content',
  template: `
    <div>
      <span>头上一片晴天，心中一个想念</span>
      <nel-divider [nelContentPosition]="'left'">少年包青天</nel-divider>
      <span>饿了别叫妈, 叫饿了么</span>
      <nel-divider><i nel-icon [nelType]="'mobile-phone'"></i></nel-divider>
      <span>为了无法计算的价值</span>
      <nel-divider [nelContentPosition]="'right'">阿里云</nel-divider>
    </div>
  `
})

export class NelDemoDividerContentComponent { }
