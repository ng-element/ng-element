import { Component } from '@angular/core';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    host: {
        class: 'article'
    },
    standalone: false
})

export class ContainerComponent { }
