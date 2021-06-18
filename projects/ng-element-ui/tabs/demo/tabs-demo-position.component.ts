import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tabs-position',
  template: `
    <div style="margin-bottom: 30px;">
      <nel-radio-group [(ngModel)]="tabPosition">
        <label nel-radio-button [nelValue]="'top'">top</label>
        <label nel-radio-button [nelValue]="'right'">right</label>
        <label nel-radio-button [nelValue]="'bottom'">bottom</label>
        <label nel-radio-button [nelValue]="'left'">left</label>
      </nel-radio-group>
    </div>
    <nel-tabs [nelTabPosition]="tabPosition">
      <nel-tab-pane [nelLabel]="'用户管理'">用户管理</nel-tab-pane>
      <nel-tab-pane [nelLabel]="'配置管理'">配置管理</nel-tab-pane>
      <nel-tab-pane [nelLabel]="'角色管理'">角色管理</nel-tab-pane>
      <nel-tab-pane [nelLabel]="'定时任务补偿'">定时任务补偿</nel-tab-pane>
    </nel-tabs>
  `
})

export class NelDemoTabsPositionComponent {
  tabPosition = 'right';
}
