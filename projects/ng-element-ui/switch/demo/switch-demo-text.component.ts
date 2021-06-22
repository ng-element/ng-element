import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-switch-text',
  template: `
    <nel-switch [(ngModel)]="value1" [nelActiveText]="'按月付费'" [nelInactiveText]="'按年付费'"></nel-switch>
    <nel-switch
      style="display: block"
      [(ngModel)]="value2"
      [nelActiveColor]="'#13ce66'"
      [nelInactiveColor]="'#ff4949'"
      [nelActiveText]="'按月付费'"
      [nelInactiveText]="'按年付费'"
    >
    </nel-switch>
  `,
  styles: [
    `
      :host ::ng-deep .el-switch {
        margin: 20px 20px 20px 0;
      }
    `
  ]
})

export class NelDemoSwitchTextComponent {
  value1 = true;
  value2 = true;
}
