import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-steps-simple',
    template: `
      <nel-steps [nelActive]="1" nelSimple>
        <nel-step [nelTitle]="'步骤 1'" [nelIcon]="'edit'"></nel-step>
        <nel-step [nelTitle]="'步骤 2'" [nelIcon]="'upload'"></nel-step>
        <nel-step [nelTitle]="'步骤 3'" [nelIcon]="'picture'"></nel-step>
      </nel-steps>

      <nel-steps [nelActive]="1" [nelFinishStatus]="'success'" nelSimple style="margin-top: 20px">
        <nel-step [nelTitle]="'步骤 1'"></nel-step>
        <nel-step [nelTitle]="'步骤 2'"></nel-step>
        <nel-step [nelTitle]="'步骤 3'"></nel-step>
      </nel-steps>
  `,
    standalone: false
})

export class NelDemoStepsSimpleComponent { }
