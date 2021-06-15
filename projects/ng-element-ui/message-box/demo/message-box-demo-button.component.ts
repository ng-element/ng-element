import { Component } from '@angular/core';
import { NelMessageBoxService } from 'ng-element-ui/message-box';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'nel-demo-message-box-button',
  template: `
    <button nel-button [nelType]="'text'" (click)="open()">点击打开 Message Box</button>
  `
})

export class NelDemoMessageBoxButtonComponent {
  constructor(
    private messageBox: NelMessageBoxService,
    private message: NelMessageService
  ) { }

  open(): void {
    this.messageBox.confirm('确认信息', '检测到未保存的内容，是否在离开页面前保存修改？', {
      cancelButtonText: '放弃修改',
      confirmButtonText: '保存',
      cancel: (type: string) => {
        this.message.info(type === 'cancel'
          ? '放弃保存并离开页面'
          : '停留在当前页面');
      },
      confirm: () => {
        this.message.info('保存修改');
      }
    });
  }
}
