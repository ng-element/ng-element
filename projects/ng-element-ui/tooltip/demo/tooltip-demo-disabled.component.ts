import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-tooltip-disabled',
  template: `
    <button (click)="disabled = !disabled" nel-button nel-tooltip [nelContent]="'点击关闭 tooltip 功能'" [nelPlacement]="'bottom'" [nelEffect]="'light'" [nelDisabled]="disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</button>
  `
})

export class NelDemoTooltipDisabledComponent {
  disabled = false;
}
