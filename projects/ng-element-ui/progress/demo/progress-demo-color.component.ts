import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-progress-color',
  template: `
    <nel-progress [nelPercentage]="percentage" [nelColor]="customColor"></nel-progress>
    <nel-progress [nelPercentage]="percentage" [nelColor]="customColorMethod"></nel-progress>
    <nel-progress [nelPercentage]="percentage" [nelColor]="customColors"></nel-progress>
    <div>
    <nel-button-group>
      <button nel-button [nelIcon]="'minus'" (click)="decrease()"></button>
      <button nel-button [nelIcon]="'plus'" (click)="increase()"></button>
    </nel-button-group>
  `,
  styles: [
    `
      :host ::ng-deep .el-progress--line {
        margin-bottom: 15px;
        width: 350px;
      }
    `
  ]
})

export class NelDemoProgressColorComponent {
  percentage = 20;
  customColor = '#409eff';
  customColors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
  ];

  customColorMethod(percentage: number): string {
    if (percentage < 30) {
      return '#909399';
    } else if (percentage < 70) {
      return '#e6a23c';
    } else {
      return '#67c23a';
    }
  }

  decrease(): void {
    this.percentage -= 10;
    if (this.percentage < 0) {
      this.percentage = 0;
    }
  }

  increase(): void {
    this.percentage += 10;
    if (this.percentage > 100) {
      this.percentage = 100;
    }
  }
}
