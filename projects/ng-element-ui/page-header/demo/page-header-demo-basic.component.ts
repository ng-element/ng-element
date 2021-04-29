import { Component } from '@angular/core';

@Component({
  selector: 'nel-demo-page-header-basic',
  template: `
    <nel-page-header (nelOnBack)="goBack()" [nelContent]="'详情页面'">
    </nel-page-header>
  `
})

export class DemoPageHeaderBasicComponent {
  goBack(): void {
    console.log('go back');
  }
}
