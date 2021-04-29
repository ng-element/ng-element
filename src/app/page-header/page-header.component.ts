import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  host: {
    '[class]': `'article'`
  }
})

export class PageHeaderComponent { }
