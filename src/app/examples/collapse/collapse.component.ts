import { Component } from '@angular/core';

@Component({
    selector: 'app-collapse',
    templateUrl: './collapse.component.html',
    host: {
        '[class]': `'article'`
    },
    standalone: false
})

export class CollapseComponent { }
