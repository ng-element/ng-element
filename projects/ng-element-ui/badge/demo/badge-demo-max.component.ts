import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-badge-max',
    template: `
    <nel-badge [nelValue]="200" [nelMax]="99" class="item">
      <button nel-button [nelSize]="'small'">评论</button>
    </nel-badge>
    <nel-badge [nelValue]="100" [nelMax]="10" class="item">
      <button nel-button [nelSize]="'small'">回复</button>
    </nel-badge>
  `,
    styles: [
        `
      .item {
        margin-top: 10px;
        margin-right: 40px;
      }
    `
    ],
    standalone: false
})

export class NelDemoBadgeMaxComponent { }
