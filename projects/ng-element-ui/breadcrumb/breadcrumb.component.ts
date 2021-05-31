import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'nel-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  host: {
    class: 'el-breadcrumb'
  }
})

export class NelBreadcrumbComponent {
  @Input() nelSeparator: string | TemplateRef<void> = '/';
}
