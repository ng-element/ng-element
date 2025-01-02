import { NelDatePickerPanelComponent } from './date-picker-panel.component';
import { ConnectionPositionPair, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { Component, ComponentRef, ElementRef, Input, OnDestroy } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nel-date-picker',
    templateUrl: './date-picker.component.html',
    host: {
        'class': 'el-input el-input--prefix el-input--suffix el-date-editor el-date-editor--date el-tooltip__trigger el-tooltip__trigger',
        'role': 'combobox',
        '(click)': 'open()'
    },
    standalone: false
})

export class NelDatePickerComponent implements OnDestroy {
  @Input() type: 'date' | 'datetime' = 'date';
  isOpened = false;
  overlayRef?: OverlayRef;
  outsideSub?: Subscription;
  positionSub?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private overlay: Overlay,
  ) { }

  ngOnDestroy(): void {
    if (this.outsideSub) {
      this.outsideSub.unsubscribe();
    }
    if (this.positionSub) {
      this.positionSub.unsubscribe();
    }
  }

  open(): void {
    if (this.isOpened) {
      return;
    }
    this.isOpened = true;
    const positionBottom: ConnectionPositionPair = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top',
      offsetY: 10
    };
    const positionTop: ConnectionPositionPair = {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom',
      offsetY: -10
    };
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([positionBottom, positionTop]);
    this.overlayRef = this.overlay.create({ positionStrategy });
    if (this.overlayRef) {
      const datePickerRef: ComponentRef<NelDatePickerPanelComponent>
        = this.overlayRef.attach(new ComponentPortal(NelDatePickerPanelComponent));
      this.outsideSub = this.overlayRef.outsidePointerEvents().subscribe(() => {
        this.close();
      });
      // 窗口大小变更时，监听位置变更
      this.positionSub = positionStrategy.positionChanges.subscribe((pos) => {
        console.log(pos);
        if (pos.connectionPair.originY === 'bottom') {
          datePickerRef.instance.changePosition('bottom');
        } else if (pos.connectionPair.originY === 'top') {
          datePickerRef.instance.changePosition('top');
        }
      });
    }
  }

  close(): void {
    this.overlayRef?.detach();
    this.isOpened = false;
  }
}
