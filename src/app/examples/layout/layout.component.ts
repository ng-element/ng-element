import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    host: {
        class: 'article'
    },
    standalone: false
})

export class LayoutComponent { }
