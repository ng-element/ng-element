import { Component } from '@angular/core';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  host: {
    '[class]': `'article'`
  }
})

export class ScrollbarComponent { }
