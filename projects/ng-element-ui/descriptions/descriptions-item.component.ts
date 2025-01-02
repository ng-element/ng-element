import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'nel-descriptions-item',
    templateUrl: './descriptions-item.component.html',
    standalone: false
})

export class NelDescriptionsItemComponent {
  @Input() nelLabel?: string | TemplateRef<void>;
  @ViewChild(TemplateRef, { static: true }) content!: TemplateRef<void>;
}
