import { Component, Input, Output, TemplateRef, EventEmitter } from '@angular/core';

@Component({
    selector: 'nel-page-header',
    templateUrl: './page-header.component.html',
    standalone: false
})

export class NelPageHeaderComponent {
  @Input() nelIcon = 'back';
  @Input() nelTitle: string | TemplateRef<void> = '返回';
  @Input() nelContent?: string | TemplateRef<void>;
  @Output() nelOnBack: EventEmitter<void> = new EventEmitter<void>();

  goBack(): void {
    this.nelOnBack.emit();
  }
}
