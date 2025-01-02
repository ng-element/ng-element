import { Component } from '@angular/core';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    host: {
        '[class]': `'article'`
    },
    standalone: false
})

export class CardComponent { }
