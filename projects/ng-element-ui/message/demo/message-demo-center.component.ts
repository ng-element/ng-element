import { Component } from '@angular/core';
import { NelMessageService } from 'ng-element-ui/message';

@Component({
  selector: 'nel-demo-message-center',
  template: `
    <button nel-button [nelPlain]="true" (click)="openCenter()">文字居中</button>
  `
})

export class NelDemoMessageCenterComponent {
  constructor(
    private messageS: NelMessageService
  ) { }

  openCenter(): void {
    const messageRef = this.messageS.info('居中的文字', {
      center: true,
      duration: 0
    });

    setTimeout(() => {
      messageRef.close();
    }, 6000);
  }
}
