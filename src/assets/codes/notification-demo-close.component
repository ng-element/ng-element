import { Component } from '@angular/core';
import { NelNotificationService } from 'ng-element-ui/notification';

@Component({
  selector: 'nel-demo-notification-close',
  template: `
    <button nel-button nelPlain (click)="open()">隐藏关闭按钮</button>
  `
})

export class NelDemoNotificationCloseComponent {
  constructor(
    private notification: NelNotificationService
  ) { }

  open(): void {
    this.notification.success('偏移', '这是一条没有关闭按钮的消息', {
      showClose: false
    });
  }
}
