import { Component } from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    host: {
        '[class]': `'article'`
    },
    standalone: false
})

export class TooltipComponent { }
