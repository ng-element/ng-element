import { Component } from '@angular/core';

@Component({
    selector: 'nel-button-group',
    template: `
    <ng-content></ng-content>
  `,
    host: {
        class: 'el-button-group'
    },
    standalone: false
})

export class NelButtonGroupComponent { }
