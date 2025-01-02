import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-progress-indeterminate',
    template: `
    <nel-progress [nelPercentage]="50" [nelIndeterminate]="true"></nel-progress>
    <nel-progress [nelPercentage]="100" [nelFormat]="format" [nelIndeterminate]="true"></nel-progress>
    <nel-progress [nelPercentage]="100" [nelStatus]="'success'" [nelIndeterminate]="true" [nelDuration]="5"></nel-progress>
    <nel-progress [nelPercentage]="100" [nelStatus]="'warning'" [nelIndeterminate]="true" [nelDuration]="1"></nel-progress>
    <nel-progress [nelPercentage]="50" [nelStatus]="'exception'" [nelIndeterminate]="true"></nel-progress>
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

export class NelDemoProgressIndeterminateComponent {
  format = (percentage: number) => percentage === 100 ? '满' : `${percentage}%`;
}
