import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  host: {
    '[class]': `'article'`
  }
})

export class InfiniteScrollComponent { }
