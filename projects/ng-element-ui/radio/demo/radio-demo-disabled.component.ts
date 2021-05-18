import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-radio-disabled',
  template: `
    <label nel-radio [(ngModel)]="radio" [nelDisabled]="true" [nelValue]="'禁用'">备选项</label>
    <label nel-radio [(ngModel)]="radio" [nelDisabled]="true" [nelValue]="'选中且禁用'">备选项</label>
  `
})

export class DemoRadioDisabledComponent {
  radio = '选中且禁用';
}
