import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-pagination-small',
    template: `
    <nel-pagination [total]="50" [small]="true"></nel-pagination>
    <nel-pagination [total]="50" [small]="true" [background]="true"></nel-pagination>
  `,
    standalone: false
})

export class NelDemoPaginationSmallComponent { }
