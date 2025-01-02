import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'nel-tab-pane',
    templateUrl: './tab-pane.component.html',
    standalone: false
})

export class NelTabPaneComponent {
  @Input() nelLabel?: string | TemplateRef<void>;
  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<void>;
  active = false;
}
