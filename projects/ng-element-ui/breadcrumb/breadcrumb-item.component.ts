import { Component } from '@angular/core';
import { NelBreadcrumbComponent } from './breadcrumb.component';

@Component({
    selector: 'nel-breadcrumb-item',
    templateUrl: './breadcrumb-item.component.html',
    host: {
        class: 'el-breadcrumb__item'
    },
    standalone: false
})

export class NelBreadcrumbItemComponent {
  constructor(
    public nelBreadcrumbComponent: NelBreadcrumbComponent
  ) { }
}
