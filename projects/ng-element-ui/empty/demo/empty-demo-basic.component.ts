import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-empty-basic',
    template: `
    <nel-empty [nelDescription]="'描述文字'"></nel-empty>
  `,
    standalone: false
})

export class NelDemoEmptyBasicComponent { }
