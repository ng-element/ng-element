import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-checkbox-basic',
    template: `
    <label nel-checkbox [(ngModel)]="checked">备选项</label>
  `,
    standalone: false
})

export class NelDemoCheckboxBasicComponent {
  checked = true;
}
