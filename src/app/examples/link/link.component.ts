import { Component } from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    host: {
        class: 'article'
    },
    standalone: false
})

export class LinkComponent { }
