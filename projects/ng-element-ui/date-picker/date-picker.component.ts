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
  }
})

export class NelDatePickerComponent implements OnDestroy {
  @Input() type: 'date' | 'datetime' = 'date';
  isOpened = false;
  overlayRef?: OverlayRef;
  outsideSub?: Subscription;

  constructor(
    private elementRef: ElementRef,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private overlay: Overlay,
  ) { }

  ngOnDestroy(): void {
    if (this.outsideSub) {
      this.outsideSub.unsubscribe();
    }
  }

  open(): void {
    console.log(123);
    if (this.isOpened) {
      return;
    }
    this.isOpened = true;
    const positionBottom: ConnectionPositionPair = {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    };
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([positionBottom]);
    this.overlayRef = this.overlay.create({ positionStrategy });
    if (this.overlayRef) {
      const dataPickerRef: ComponentRef<NelDatePickerPanelComponent>
        = this.overlayRef.attach(new ComponentPortal(NelDatePickerPanelComponent));
      this.outsideSub = this.overlayRef.outsidePointerEvents().subscribe(() => {
        this.close();
      });
    }
  }

  close(): void {
    this.overlayRef?.detach();
    this.isOpened = false;
  }
}
