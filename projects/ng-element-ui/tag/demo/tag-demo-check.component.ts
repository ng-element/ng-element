import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-tag-check',
    template: `
    <div>
      <nel-check-tag nelChecked style="margin-right: 8px;">选中</nel-check-tag>
      <nel-check-tag (click)="onChange()" [nelChecked]="checked">点我切换</nel-check-tag>
    </div>
  `,
    standalone: false
})

export class NelDemoTagCheckComponent {
  checked = false;

  onChange(): void {
    this.checked = !this.checked;
  }
}
