import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-badge-dot',
  template: `
    <nel-badge [nelIsDot]="true" class="item">数据查询</nel-badge>
    <nel-badge [nelIsDot]="true" class="item">
      <button nel-button class="share-button" [nelIcon]="'share'" [nelType]="'primary'"></button>
    </nel-badge>
  `,
  styles: [
    `
      .item {
        margin-top: 10px;
        margin-right: 40px;
      }
    `
  ]
})

export class NelDemoBadgeDotComponent { }
