import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tabs-basic',
  template: `
    <nel-tabs (click)="handleClick()">
      <nel-tab-pane [nelLabel]="'用户管理'">用户管理</nel-tab-pane>
      <nel-tab-pane [nelLabel]="'配置管理'">配置管理</nel-tab-pane>
      <nel-tab-pane [nelLabel]="'角色管理'">角色管理</nel-tab-pane>
      <nel-tab-pane [nelLabel]="'定时任务补偿'">定时任务补偿</nel-tab-pane>
    </nel-tabs>
  `
})

export class NelDemoTabsBasicComponent {
  handleClick(): void {

  }
}
