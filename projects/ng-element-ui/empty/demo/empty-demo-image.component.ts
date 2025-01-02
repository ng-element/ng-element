import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-empty-image',
    template: `
    <nel-empty [nelImage]="'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'"></nel-empty>
  `,
    standalone: false
})

export class NelDemoEmptyImageComponent { }
