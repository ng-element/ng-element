import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-icon-basic',
    template: `
    <span class="icons">
      <i nel-icon [nelType]="'aim'"></i>
      <i nel-icon [nelType]="'apple'"></i>
    </span>
  `,
    standalone: false
})

export class NelDemoIconBasicComponent { }
