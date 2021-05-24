import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-popover-basic',
  template: `
    <button nel-button
      nel-popover
      [nelPopoverPlacement]="'top-start'"
      [nelPopoverTitle]="'标题'"
      [nelPopoverWidth]="200"
      [nelPopoverTrigger]="'hover'"
      [nelPopoverContent]="'这是一段内容,这是一段内容,这是一段内容,这是一段内容。'"
    >hover 激活
    </button>

    <button nel-button
      nel-popover
      [nelPopoverPlacement]="'bottom'"
      [nelPopoverTitle]="'标题'"
      [nelPopoverWidth]="200"
      [nelPopoverTrigger]="'click'"
      [nelPopoverContent]="'这是一段内容,这是一段内容,这是一段内容,这是一段内容。'"
    >click 激活
    </button>

    <button nel-button
      nel-popover
      ref="popover"
      [nelPopoverPlacement]="'right'"
      [nelPopoverTitle]="'标题'"
      [nelPopoverWidth]="200"
      [nelPopoverTrigger]="'focus'"
      [nelPopoverContent]="'这是一段内容,这是一段内容,这是一段内容,这是一段内容。'"
    >focus 激活
    </button>

    <button nel-button
      (click)="visible = !visible"
      nel-popover
      [nelPopoverPlacement]="'bottom'"
      [nelPopoverTitle]="'标题'"
      [nelPopoverWidth]="200"
      [nelPopoverTrigger]="'manual'"
      [nelPopoverContent]="'这是一段内容,这是一段内容,这是一段内容,这是一段内容。'"
      [nelPopoverVisible]="visible"
    >手动激活
    </button>
  `
})

export class NelDemoPopoverBasicComponent {
  visible = false;
}
