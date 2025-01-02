import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-calendar-basic',
    template: `
    <nel-calendar [(ngModel)]="value"></nel-calendar>
  `,
    styles: [
        `
      :host ::ng-deep .is-selected {
        color: #1989fa;
      }
    `
    ],
    standalone: false
})

export class NelDemoCalendarBasicComponent {
  value = new Date();
}
