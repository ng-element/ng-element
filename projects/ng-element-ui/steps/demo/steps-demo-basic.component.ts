import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-steps-basic',
    template: `
    <nel-steps [nelActive]="active" [nelFinishStatus]="'success'">
      <nel-step [nelTitle]="'步骤 1'"></nel-step>
      <nel-step [nelTitle]="'步骤 2'"></nel-step>
      <nel-step [nelTitle]="'步骤 3'"></nel-step>
    </nel-steps>

    <button nel-button style="margin-top: 12px;" (click)="next()">下一步</button>
  `,
    standalone: false
})

export class NelDemoStepsBasicComponent {
  active = 0;

  next(): void {
    if (this.active++ > 2) {
      this.active = 0;
    }
    console.log(this.active);
  }
}
