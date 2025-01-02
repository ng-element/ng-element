import { Component } from '@angular/core';

@Component({
    selector: 'app-empty',
    templateUrl: './empty.component.html',
    host: {
        class: 'article'
    },
    standalone: false
})

export class EmptyComponent { }
