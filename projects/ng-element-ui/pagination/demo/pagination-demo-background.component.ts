import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-pagination-background',
    template: `
    <nel-pagination [total]="1000" [background]="true"></nel-pagination>
  `,
    standalone: false
})

export class NelDemoPaginationBackgroundComponent { }
