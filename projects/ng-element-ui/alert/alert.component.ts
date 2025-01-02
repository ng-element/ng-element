import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

export type AlertType = 'success' | 'warning' | 'info' | 'error';
export type EffectType = 'light' | 'dark';

@Component({
    selector: 'nel-alert',
    templateUrl: './alert.component.html',
    standalone: false
})

export class NelAlertComponent {
  static ngAcceptInputType_nelShowIcon: BooleanInput;
  static ngAcceptInputType_nelCenter: BooleanInput;

  @Input() nelTitle?: string | TemplateRef<void>;
  @Input() nelType: AlertType = 'info';
  @Input() nelEffect: EffectType = 'light';
  @Input() nelClosable = true;
  @Input() nelCloseText: string | null = null;
  @Input() @InputBoolean() nelShowIcon = false;
  @Input() @InputBoolean() nelCenter = false;
  @Input() nelDescription?: string | TemplateRef<void>;
  @Output() nelOnClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = false;

  constructor() { }

  close(): void {
    this.nelOnClose.emit(true);
    this.hide = true;
  }
}
