import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-color-picker-basic',
    template: `
    <p>{{color1}}</p>
    <nel-color-picker [(ngModel)]="color1"></nel-color-picker>
  `,
    standalone: false
})

export class NelDemoColorPickerBasicComponent {
  color1 = '#409EFF';
}
