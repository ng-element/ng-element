import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NelMessageBoxService } from 'ng-element-ui/message-box';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
    selector: 'nel-demo-message-box-blank',
    template: `
    <button nel-button [nelType]="'text'" (click)="open()">点击打开 Message Box</button>
    <ng-template #contentTpl>
      <div>请输入邮箱</div>
      <div>
        这是一个输入框，待开发中...
      </div>
      <div>{{num}}</div>
    </ng-template>
  `,
    standalone: false
})

export class NelDemoMessageBoxBlankComponent {
  @ViewChild('contentTpl', { static: false }) contentTpl!: TemplateRef<void>;
  num = 0;

  constructor(
    private messageBox: NelMessageBoxService,
    private message: NelMessageService
  ) { }

  open(): void {
    this.messageBox.blank('提示', this.contentTpl, {
      cancel: () => {
        this.message.info('action: cancel');
      },
      confirm: () => {
        this.message.info('action: confirm');
      },
      beforeConfirm: (): boolean => {
        if (this.num > 0) {
          return true;
        } else {
          this.num++;
          return false;
        }
      }
    });
  }
}
