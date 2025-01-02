import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-progress-text',
    template: `
    <nel-progress [nelTextInside]="true" [nelStrokeWidth]="26" [nelPercentage]="70"></nel-progress>
    <nel-progress [nelTextInside]="true" [nelStrokeWidth]="24" [nelPercentage]="100" [nelStatus]="'success'"></nel-progress>
    <nel-progress [nelTextInside]="true" [nelStrokeWidth]="22" [nelPercentage]="80" [nelStatus]="'warning'"></nel-progress>
    <nel-progress [nelTextInside]="true" [nelStrokeWidth]="20" [nelPercentage]="50" [nelStatus]="'exception'"></nel-progress>
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

export class NelDemoProgressTextComponent { }
