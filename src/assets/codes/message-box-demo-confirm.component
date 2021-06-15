import { Component } from '@angular/core';
import { NelMessageBoxService } from 'ng-element-ui/message-box';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'nel-demo-message-box-confirm',
  template: `
    <button nel-button [nelType]="'text'" (click)="open()">点击打开 Message Box</button>
  `
})

export class NelDemoMessageBoxConfirmComponent {
  constructor(
    private messageBox: NelMessageBoxService,
    private message: NelMessageService
  ) { }

  open(): void {
    this.messageBox.confirm('提示', '此操作将永久删除该文件, 是否继续?', {
      cancelButtonText: '取消',
      confirmButtonText: '确定',
      type: 'warning',
      cancel: () => {
        this.message.info('已取消删除');
      },
      confirm: () => {
        this.message.success('删除成功!');
      }
    });
  }
}
