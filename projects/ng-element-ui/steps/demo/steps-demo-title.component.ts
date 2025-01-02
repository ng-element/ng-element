import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-steps-title',
    template: `
    <nel-steps [nelSpace]="200" [nelActive]="1" [nelFinishStatus]="'success'">
      <nel-step [nelTitle]="'已完成'"></nel-step>
      <nel-step [nelTitle]="'进行中'"></nel-step>
      <nel-step [nelTitle]="'步骤 3'"></nel-step>
    </nel-steps>
  `,
    standalone: false
})

export class NelDemoStepsTitleComponent { }
