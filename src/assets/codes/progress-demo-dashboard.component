import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-progress-dashboard',
  template: `
    <nel-progress [nelType]="'dashboard'" [nelPercentage]="percentage" [nelColor]="colors"></nel-progress>
    <div>
      <nel-button-group>
        <button nel-button [nelIcon]="'minus'" (click)="decrease()"></button>
        <button nel-button [nelIcon]="'plus'" (click)="increase()"></button>
      </nel-button-group>
    </div>
  `
})

export class NelDemoProgressDashboardComponent {
  percentage = 10;
  colors = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
  ];

  increase(): void {
    this.percentage += 10;
    if (this.percentage > 100) {
      this.percentage = 100;
    }
  }

  decrease(): void {
    this.percentage -= 10;
    if (this.percentage < 0) {
      this.percentage = 0;
    }
  }
}
