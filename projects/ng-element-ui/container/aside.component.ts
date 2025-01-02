import { Component } from '@angular/core';

@Component({
    selector: 'nel-aside',
    templateUrl: './aside.component.html',
    host: {
        '[class.el-aside]': 'true'
    },
    standalone: false
})

export class NelAsideComponent { }
