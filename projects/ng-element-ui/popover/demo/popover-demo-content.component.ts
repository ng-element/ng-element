import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-popover-content',
    template: `
  <button nel-button
    nel-popover
    [nelPopoverContent]="contentTpl"
    [nelPopoverPlacement]="'right'"
    [nelPopoverWidth]="400"
    [nelPopoverTrigger]="'click'"
  >click 激活
  </button>
  <ng-template #contentTpl>
    这是一个内嵌的content
  </ng-template>
  `,
    standalone: false
})

export class NelDemoPopoverContentComponent { }
