import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-backtop-basic',
    template: `
    Scroll down to see the bottom-right button.
    <nel-backtop [nelTarget]="'.mainWrap'" [nelBottom]="100"></nel-backtop>
  `,
    standalone: false
})

export class NelDemoBacktopBasicComponent { }
