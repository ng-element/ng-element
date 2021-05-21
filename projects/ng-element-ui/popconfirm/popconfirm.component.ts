import { Component, EventEmitter } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';

@Component({
  selector: 'nel-popconfirm',
  templateUrl: './popconfirm.component.html'
})

export class NelPopconfirmComponent {
  title?: string;
  onCancel!: EventEmitter<void>;
  onConfirm!: EventEmitter<void>;
  confirmButtonText!: string;
  cancelButtonText!: string;
  confirmButtonType!: string;
  cancelButtonType!: string;
  icon!: string;
  iconColor!: string;
  hideIcon!: boolean;
  isOpen = false;
  trigger!: CdkOverlayOrigin;
  positionStrategy!: ConnectionPositionPair[];
  arrowLeft = '';
  arrowRight = '';
  arrowTop = '';
  arrowBottom = '';
  transform = '';

  close(): void {
    this.isOpen = false;
  }

  cancel(): void {
    this.isOpen = false;
    if (this.onCancel) {
      this.onCancel.emit();
    }
  }

  confirm(): void {
    this.isOpen = false;
    if (this.onConfirm) {
      this.onConfirm.emit();
    }
  }
}
