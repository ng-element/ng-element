import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-progress-basic',
    template: `
    <nel-progress [nelPercentage]="50"></nel-progress>
    <nel-progress [nelPercentage]="100" [nelFormat]="format"></nel-progress>
    <nel-progress [nelPercentage]="100" [nelStatus]="'success'"></nel-progress>
    <nel-progress [nelPercentage]="100" [nelStatus]="'warning'"></nel-progress>
    <nel-progress [nelPercentage]="50" [nelStatus]="'exception'"></nel-progress>
  `,
    styles: [
        `
      :host ::ng-deep .el-progress--line {
        margin-bottom: 15px;
        width: 350px;
      }
    `
    ],
    standalone: false
})

export class NelDemoProgressBasicComponent {
  format = (percentage: number) => percentage === 100 ? '满' : `${percentage}%`;
}
