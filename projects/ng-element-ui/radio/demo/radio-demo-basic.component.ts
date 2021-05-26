import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-radio-basic',
  template: `
    <label nel-radio [(ngModel)]="radio" [nelValue]="'1'">Radio</label>
    <label nel-radio [(ngModel)]="radio" [nelValue]="'2'">Radio</label>
  `
})

export class NelDemoRadioBasicComponent {
  radio = '1';
}
