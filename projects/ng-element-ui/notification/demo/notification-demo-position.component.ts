import { Component } from '@angular/core';
import { NelNotificationService } from 'ng-element-ui/notification';

@Component({
  selector: 'nel-demo-notification-position',
  template: `
  <button nel-button nelPlain (click)="open1()">右上角</button>
  <button nel-button nelPlain (click)="open2()">右下角</button>
  <button nel-button nelPlain (click)="open3()">左下角</button>
  <button nel-button nelPlain (click)="open4()">左上角</button>
  `
})

export class NelDemoNotificationPositionComponent {
  constructor(
    private notification: NelNotificationService
  ) { }

  open1(): void {
    this.notification.blank('自定义位置', '右上角弹出的消息', {
      position: 'top-right'
    });
  }

  open2(): void {
    this.notification.blank('自定义位置', '右下角弹出的消息', {
      position: 'bottom-right'
    });
  }

  open3(): void {
    this.notification.blank('自定义位置', '左下角弹出的消息', {
      position: 'bottom-left'
    });
  }

  open4(): void {
    this.notification.blank('自定义位置', '左上角弹出的消息', {
      position: 'top-left'
    });
  }
}
