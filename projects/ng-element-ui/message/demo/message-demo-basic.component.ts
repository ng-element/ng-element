import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
    selector: 'nel-demo-message-basic',
    template: `
    <button nel-button nelPlain (click)="open()">打开消息提示</button>
    <button nel-button nelPlain (click)="openVn()">TemplateRef消息</button>
    <ng-template #tpl>
      <p>{{content}}</p>
    </ng-template>
  `,
    standalone: false
})

export class NelDemoMessageBasicComponent {
  content = '模板消息';
  @ViewChild('tpl', { static: false }) tpl!: TemplateRef<void>;

  constructor(
    private message: NelMessageService
  ) { }

  open(): void {
    this.message.info('只是一条消息提示');
  }

  openVn(): void {
    this.message.info(this.tpl);
  }
}
