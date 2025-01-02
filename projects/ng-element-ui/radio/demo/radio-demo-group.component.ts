import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-radio-group',
    template: `
    <nel-radio-group [(ngModel)]="radioValue">
      <label nel-radio [nelValue]="3">备选项</label>
      <label nel-radio [nelValue]="6">备选项</label>
      <label nel-radio [nelValue]="9">备选项</label>
    </nel-radio-group>
  `,
    standalone: false
})

export class NelDemoRadioGroupComponent {
  radioValue = 3;
}
