import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-radio-border',
  template: `
    <div>
      <label nel-radio [(ngModel)]="radio1" [nelValue]="'1'" [nelBorder]="true">备选项1</label>
      <label nel-radio [(ngModel)]="radio1" [nelValue]="'2'" [nelBorder]="true">备选项1</label>
    </div>
    <div style="margin-top: 20px">
      <label nel-radio [(ngModel)]="radio2" [nelValue]="'1'" [nelBorder]="true" [nelSize]="'medium'">备选项1</label>
      <label nel-radio [(ngModel)]="radio2" [nelValue]="'2'" [nelBorder]="true" [nelSize]="'medium'">备选项1</label>
    </div>
    <div style="margin-top: 20px">
      <label nel-radio [(ngModel)]="radio3" [nelValue]="'1'" [nelBorder]="true" [nelSize]="'small'">备选项1</label>
      <label nel-radio [(ngModel)]="radio3" [nelValue]="'2'" [nelBorder]="true" [nelSize]="'small'" [nelDisabled]="true">备选项1</label>
    </div>
    <div style="margin-top: 20px">
      <label nel-radio [(ngModel)]="radio4" [nelValue]="'1'" [nelBorder]="true" [nelSize]="'mini'" [nelDisabled]="true">备选项1</label>
      <label nel-radio [(ngModel)]="radio4" [nelValue]="'2'" [nelBorder]="true" [nelSize]="'mini'" [nelDisabled]="true">备选项1</label>
    </div>
  `
})

export class NelDemoRadioBorderComponent {
  radio1 = '1';
  radio2 = '1';
  radio3 = '1';
  radio4 = '1';
}
