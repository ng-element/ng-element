import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tag-effect',
  template: `
    <div class="tag-group">
      <span class="tag-group__title">Dark</span>
      <nel-tag
        *ngFor="let item of items"
        [nelType]="item.type"
        [nelEffect]="'dark'">
        {{ item.label }}
      </nel-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group__title">Plain</span>
      <nel-tag
        *ngFor="let item of items"
        [nelType]="item.type"
        [nelEffect]="'plain'">
        {{ item.label }}
      </nel-tag>
    </div>
  `,
  styles: [
    `
      .tag-group {
        display: flex;
        align-items: center;
      }

      .tag-group+.tag-group {
        margin-top: 10px;
      }

      .tag-group__title {
        width: 45px;
        font-size: 14px;
        color: #606266;
      }

      .el-tag+.el-tag {
        margin-left: 10px;
      }
    `
  ]
})

export class NelDemoTagEffectComponent {
  items = [
    { type: '', label: '标签一' },
    { type: 'success', label: '标签二' },
    { type: 'info', label: '标签三' },
    { type: 'danger', label: '标签四' },
    { type: 'warning', label: '标签五' }
  ];
}
