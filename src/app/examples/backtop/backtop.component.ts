import { Component } from '@angular/core';

@Component({
    selector: 'app-backtop',
    templateUrl: './backtop.component.html',
    host: {
        '[class]': `'article'`
    },
    standalone: false
})

export class BacktopComponent { }
