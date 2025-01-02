import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-empty-footer',
    template: `
    <nel-empty [nelFooter]="'底部内容'"></nel-empty>
  `,
    standalone: false
})

export class NelDemoEmptyFooterComponent { }
