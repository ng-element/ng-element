import { Component, Input, TemplateRef } from '@angular/core';

@Component({
    selector: 'nel-menu-item-group',
    templateUrl: './menu-item-group.component.html',
    standalone: false
})

export class NelMenuItemGroupComponent {
  @Input() title?: string | TemplateRef<void>;
}
