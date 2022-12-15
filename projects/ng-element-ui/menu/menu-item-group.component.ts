import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'nel-menu-item-group',
  templateUrl: './menu-item-group.component.html'
})

export class NelMenuItemGroupComponent {
  @Input() title?: string | TemplateRef<void>;
}
