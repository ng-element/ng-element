import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-affix-basic',
  template: `
    <nel-affix [nelOffset]="120">
      <button nel-button [nelType]="'primary'">距离顶部 120px</button>
    </nel-affix>
  `
})

export class NelDemoAffixBasicComponent { }
