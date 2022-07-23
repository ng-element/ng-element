import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  host: {
    '[class]': `'article'`
  }
})

export class CardComponent { }
