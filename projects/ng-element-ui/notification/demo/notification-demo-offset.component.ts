import { Component } from '@angular/core';
import { NelNotificationService } from 'ng-element-ui/notification';

@Component({
  selector: 'nel-demo-notification-offset',
  template: `
    <button nel-button nelPlain (click)="open()">偏移的消息</button>
  `
})

export class NelDemoNotificationOffsetComponent {
  constructor(
    private notification: NelNotificationService
  ) { }

  open(): void {
    this.notification.blank('偏移', '这是一条带有偏移的提示消息', {
      offset: 100
    });
  }
}
