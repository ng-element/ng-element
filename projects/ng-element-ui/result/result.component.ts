import { Component, Input, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';

@Component({
  selector: 'nel-result',
  templateUrl: './result.component.html'
})

export class NelResultComponent implements OnChanges {
  iconType = 'string';
  @Input() nelIcon: 'success' | 'warning' | 'error' | 'info' | TemplateRef<void> = 'info';
  @Input() nelTitle?: string | TemplateRef<void>;
  @Input() nelSubTitle?: string | TemplateRef<void>;
  @Input() nelExtra?: string | TemplateRef<void>;

  ngOnChanges(changes: SimpleChanges): void {
    const { nelIcon } = changes;
    if (nelIcon) {
      if (typeof nelIcon.currentValue === 'string') {
        this.iconType = 'string';
      } else {
        this.iconType = 'templateRef';
      }
    }
  }
}
