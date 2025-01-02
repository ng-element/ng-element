import { Component } from '@angular/core';

@Component({
    selector: 'nel-footer',
    templateUrl: './footer.component.html',
    host: {
        '[class.el-footer]': 'true'
    },
    standalone: false
})

export class NelFooterComponent { }
