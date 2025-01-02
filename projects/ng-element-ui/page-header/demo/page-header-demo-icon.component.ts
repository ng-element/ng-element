import { Component } from '@angular/core';

@Component({
    selector: 'nel-demo-page-header-icon',
    template: `
    <nel-page-header [nelIcon]="'arrow-left'" [nelContent]="'详情页面'"></nel-page-header>
  `,
    standalone: false
})

export class NelDemoPageHeaderIconComponent { }
