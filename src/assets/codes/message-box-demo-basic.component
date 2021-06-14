import { Component } from '@angular/core';
import { NelMessageBoxService } from 'ng-element-ui/message-box';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'nel-demo-message-box-basic',
  template: `
    <button nel-button [nelType]="'text'" (click)="open()">点击打开 Message Box</button>
  `
})

export class NelDemoMessageBoxBasicComponent {
  constructor(
    private messageBoxS: NelMessageBoxService,
    private message: NelMessageService
  ) { }

  open(): void {
    this.messageBoxS.alert('标题名称', '这是一段内容', {
      cancel: () => {
        this.message.info('action: cancel');
      },
      confirm: () => {
        this.message.info('action: confirm');
      }
    });
  }
}
