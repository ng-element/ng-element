import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-radio-button',
  template: `
    <div>
      <nel-radio-group [(ngModel)]="radio1">
        <label nel-radio-button [nelValue]="'上海'">上海</label>
        <label nel-radio-button [nelValue]="'北京'">北京</label>
        <label nel-radio-button [nelValue]="'广州'">广州</label>
        <label nel-radio-button [nelValue]="'深圳'">深圳</label>
      </nel-radio-group>
    </div>
    <div style="margin-top: 20px">
      <nel-radio-group [(ngModel)]="radio2" [nelSize]="'medium'">
        <label nel-radio-button [nelValue]="'上海'">上海</label>
        <label nel-radio-button [nelValue]="'北京'">北京</label>
        <label nel-radio-button [nelValue]="'广州'">广州</label>
        <label nel-radio-button [nelValue]="'深圳'">深圳</label>
      </nel-radio-group>
    </div>
    <div style="margin-top: 20px">
      <nel-radio-group [(ngModel)]="radio3" [nelSize]="'small'">
        <label nel-radio-button [nelValue]="'上海'">上海</label>
        <label nel-radio-button [nelValue]="'北京'" [nelDisabled]="true">北京</label>
        <label nel-radio-button [nelValue]="'广州'">广州</label>
        <label nel-radio-button [nelValue]="'深圳'">深圳</label>
      </nel-radio-group>
    </div>
    <div style="margin-top: 20px">
      <nel-radio-group [(ngModel)]="radio4" nelDisabled [nelSize]="'mini'">
        <label nel-radio-button [nelValue]="'上海'">上海</label>
        <label nel-radio-button [nelValue]="'北京'">北京</label>
        <label nel-radio-button [nelValue]="'广州'">广州</label>
        <label nel-radio-button [nelValue]="'深圳'">深圳</label>
      </nel-radio-group>
    </div>
  `
})

export class NelDemoRadioButtonComponent {
  radio1 = '上海';
  radio2 = '上海';
  radio3 = '上海';
  radio4 = '上海';
}
