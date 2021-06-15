import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tag-closable',
  template: `
    <nel-tag
      *ngFor="let tag of tags"
      nelClosable
      [nelType]="tag.type">
      {{tag.name}}
    </nel-tag>
  `,
  styles: [
    `
      .el-tag+.el-tag {
        margin-left: 10px;
      }
    `
  ]
})

export class NelDemoTagClosableComponent {
  tags = [
    { name: '标签一', type: '' },
    { name: '标签二', type: 'success' },
    { name: '标签三', type: 'info' },
    { name: '标签四', type: 'warning' },
    { name: '标签五', type: 'danger' }
  ];
}
