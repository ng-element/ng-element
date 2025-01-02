import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-progress-circle',
    template: `
    <nel-progress [nelType]="'circle'" [nelPercentage]="0"></nel-progress>
    <nel-progress [nelType]="'circle'" [nelPercentage]="25"></nel-progress>
    <nel-progress [nelType]="'circle'" [nelPercentage]="100" [nelStatus]="'success'"></nel-progress>
    <nel-progress [nelType]="'circle'" [nelPercentage]="70" [nelStatus]="'warning'"></nel-progress>
    <nel-progress [nelType]="'circle'" [nelPercentage]="50" [nelStatus]="'exception'"></nel-progress>
  `,
    styles: [
        `
      :host ::ng-deep .el-progress--circle {
        margin-right: 15px;
      }
    `
    ],
    standalone: false
})

export class NelDemoProgressCircleComponent { }
