import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-checkbox-group',
  template: `
    <nel-checkbox-group [(ngModel)]="checkList">
      <label nel-checkbox [nelValue]="'复选框 A'"></label>
      <label nel-checkbox [nelValue]="'复选框 B'"></label>
      <label nel-checkbox [nelValue]="'复选框 C'"></label>
      <label nel-checkbox [nelValue]="'禁用'" nelDisabled></label>
      <label nel-checkbox [nelValue]="'选中且禁用'" nelDisabled></label>
    </nel-checkbox-group>
  `
})

export class NelDemoCheckboxGroupComponent {
  checkList = ['选中且禁用', '复选框 A'];
}
