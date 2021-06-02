import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-steps-direction',
  template: `
    <div style="height: 300px;">
      <nel-steps [nelDirection]="'vertical'" [nelActive]="1">
        <nel-step [nelTitle]="'步骤 1'"></nel-step>
        <nel-step [nelTitle]="'步骤 2'"></nel-step>
        <nel-step [nelTitle]="'步骤 3'" [nelDescription]="'这是一段很长很长很长的描述性文字'"></nel-step>
      </nel-steps>
    </div>
  `
})

export class NelDemoStepsDirectionComponent { }
