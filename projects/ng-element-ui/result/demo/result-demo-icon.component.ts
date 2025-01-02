import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-result-icon',
    template: `
    <nel-result [nelTitle]="'404'" [nelSubTitle]="'抱歉，请求错误'" [nelExtra]="extra" [nelIcon]="icon">
      <ng-template #icon>
        <nel-image [nelSrc]="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"></nel-image>
      </ng-template>
      <ng-template #extra>
        <button nel-button [nelType]="'primary'" [nelSize]="'medium'">返回</button>
      </ng-template>
    </nel-result>
  `,
    standalone: false
})

export class NelDemoResultIconComponent { }
