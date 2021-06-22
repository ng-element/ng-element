import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-progress-format',
  template: `
    <nel-progress [nelPercentage]="50" [nelFormat]="formatTpl1">
      <ng-template #formatTpl1>
        <button nel-button [nelType]="'text'">自定义内容</button>
      </ng-template>
    </nel-progress>
    <nel-progress [nelTextInside]="true" [nelStrokeWidth]="20" [nelPercentage]="50" [nelStatus]="'exception'" [nelFormat]="formatTpl2">
      <ng-template #formatTpl2>
        <span>自定义内容</span>
      </ng-template>
    </nel-progress>
    <nel-progress [nelType]="'circle'" [nelPercentage]="100" [nelStatus]="'success'" [nelFormat]="formatTpl3">
      <ng-template #formatTpl3>
        <button nel-button [nelType]="'success'" [nelIcon]="'check'" nelCircle></button>
      </ng-template>
    </nel-progress>
    <nel-progress [nelType]="'dashboard'" [nelPercentage]="80" [nelFormat]="formatTpl4">
      <ng-template #formatTpl4 let-percentage>
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">当前进度</span>
      </ng-template>
    </nel-progress>
  `,
  styles: [
    `
      :host ::ng-deep .el-progress--line {
        margin-bottom: 15px;
        width: 350px;
      }

      :host ::ng-deep .el-progress--circle {
        margin-right: 15px;
      }

      :host ::ng-deep .percentage-value {
        display: block;
        margin-top: 10px;
        font-size: 28px;
      }

      :host ::ng-deep .percentage-label {
        display: block;
        margin-top: 10px;
        font-size: 12px;
      }
    `
  ]
})

export class NelDemoProgressFormatComponent { }
