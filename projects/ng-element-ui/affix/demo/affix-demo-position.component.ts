import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-affix-position',
  template: `
    <nel-affix [nelPosition]="'bottom'" [nelOffset]="20">
      <button nel-button [nelType]="'primary'">距离底部 20px</button>
    </nel-affix>
  `
})

export class NelDemoAffixPositionComponent { }
