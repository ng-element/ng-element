import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-alert-close',
    template: `
    <nel-alert [nelTitle]="'不可关闭的 alert'" [nelType]="'success'" [nelClosable]="false"></nel-alert>
    <nel-alert [nelTitle]="'自定义 close-text'" [nelType]="'info'" [nelCloseText]="'知道了'"></nel-alert>
    <nel-alert [nelTitle]="'设置了回调的 alert'" [nelType]="'warning'" (nelOnClose)="hello()"></nel-alert>
  `,
    styles: [
        `
      nel-alert:first-child {
        margin: 0;
      }
      nel-alert {
        margin: 20px 0 0;
      }
    `
    ],
    standalone: false
})

export class NelDemoAlertCloseComponent {
  hello(): void {
    alert('Hello World!');
  }
}
