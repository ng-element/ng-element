import { Component } from '@angular/core';

@Component({
    selector: 'nel-main',
    templateUrl: './main.component.html',
    host: {
        '[class.el-main]': 'true'
    },
    standalone: false
})

export class NelMainComponent { }
