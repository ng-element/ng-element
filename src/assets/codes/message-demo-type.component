import { Component } from '@angular/core';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
    selector: 'nel-demo-message-type',
    template: `
    <button nel-button nelPlain (click)="open1()">成功</button>
    <button nel-button nelPlain (click)="open2()">警告</button>
    <button nel-button nelPlain (click)="open3()">消息</button>
    <button nel-button nelPlain (click)="open4()">错误</button>
  `,
    standalone: false
})

export class NelDemoMessageTypeComponent {
  constructor(
    private message: NelMessageService
  ) { }

  open1(): void {
    this.message.success('恭喜你，这是一条成功消息');
  }

  open2(): void {
    this.message.warning('恭喜你，这是一条成功消息');
  }

  open3(): void {
    this.message.info('恭喜你，这是一条成功消息');
  }

  open4(): void {
    this.message.error('恭喜你，这是一条成功消息');
  }
}
