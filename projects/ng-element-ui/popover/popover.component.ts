import { Component, EventEmitter, Output, TemplateRef } from '@angular/core';
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { TriggerType } from './popover.directive';

@Component({
  selector: 'nel-popover',
  templateUrl: './popover.component.html'
})

export class NelPopoverComponent {
  title?: string;
  content?: string | TemplateRef<void>;
  width?: number;
  trigger!: TriggerType;
  origin!: CdkOverlayOrigin;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen = false;
  positionStrategy!: ConnectionPositionPair[];
  arrowLeft = '';
  arrowRight = '';
  arrowTop = '';
  arrowBottom = '';
  transform = '';

  onClickOutside(event: MouseEvent): void {
    // 触发点击事件的dom，不在origin内，方才关闭
    if (!this.origin.elementRef.nativeElement.contains(event.target) && this.trigger !== 'manual') {
      this.isOpen = false;
      this.visibleChange.emit(false);
    }
  }

  close(): void {
    this.isOpen = false;
  }
}
