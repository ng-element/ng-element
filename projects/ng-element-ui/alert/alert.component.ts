import { Component, EventEmitter, Input, Output } from '@angular/core';

export type AlertType = 'success' | 'warning' | 'info' | 'error';
export type EffectType = 'light' | 'dark';

@Component({
  selector: 'nel-alert',
  templateUrl: './alert.component.html'
})

export class NelAlertComponent {
  @Input() nelTitle = '';
  @Input() nelType: AlertType = 'info';
  @Input() nelEffect: EffectType = 'light';
  @Input() nelClosable = true;
  @Input() nelCloseText: string | null = null;
  @Input() nelShowIcon = false;
  @Input() nelCenter = false;
  @Input() nelDescription = '';
  @Output() nelOnClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  hide = false;

  constructor() { }

  close(): void {
    this.nelOnClose.emit(true);
    this.hide = true;
  }
}
