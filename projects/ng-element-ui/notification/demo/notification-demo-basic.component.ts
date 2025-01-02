import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NelNotificationService } from 'ng-element-ui/notification';

@Component({
    selector: 'nel-demo-notification-basic',
    template: `
    <button nel-button nelPlain (click)="open1()">可自动关闭</button>
    <button nel-button nelPlain (click)="open2()">不会自动关闭</button>
    <ng-template #contentTpl>
      <i style="color: teal;">这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案</i>
    <ng-template>
  `,
    standalone: false
})

export class NelDemoNotificationBasicComponent {
  @ViewChild('contentTpl', { static: false }) contentTpl!: TemplateRef<void>;

  constructor(
    private notification: NelNotificationService
  ) { }

  open1(): void {
    this.notification.blank('标题名称', this.contentTpl);
  }

  open2(): void {
    this.notification.blank('标题名称', '这是一条不会自动关闭的消息', {
      duration: 0
    });
  }
}
