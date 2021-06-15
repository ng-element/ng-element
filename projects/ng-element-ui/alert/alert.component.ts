import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BooleanInput } from '@angular/cdk/coercion';
import { InputBoolean } from 'ng-element-ui/core/utils';

export type AlertType = 'success' | 'warning' | 'info' | 'error';
export type EffectType = 'light' | 'dark';

@Component({
  selector: 'nel-alert',
  templateUrl: './alert.component.html'
})

export class NelAlertComponent {
  static ngAcceptInputType_nelShowIcon: BooleanInput;
  static ngAcceptInputType_nelCenter: BooleanInput;

  @Input() nelTitle = '';
  @Input() nelType: AlertType = 'info';
  @Input() nelEffect: EffectType = 'light';
  @Input() nelClosable = true;
  @Input() nelCloseText: string | null = null;
  @Input() @InputBoolean() nelShowIcon = false;
  @Input() @InputBoolean() nelCenter = false;
  @Input() nelDescription = '';
  @Output() nelOnClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = false;

  constructor() { }

  close(): void {
    this.nelOnClose.emit(true);
    this.hide = true;
  }
}
