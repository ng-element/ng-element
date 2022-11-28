import { NelTimePickerPanelComponent } from './time-picker-panel.component';
import { ConnectionPositionPair, Overlay, OverlayPositionBuilder, OverlayRef, PositionStrategy } from '@angular/cdk/overlay';
import { Component, ComponentRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'nel-time-picker',
  templateUrl: './time-picker.component.html',
  host: {
    'class': 'el-input el-input--prefix el-input--suffix el-date-editor el-date-editor--time el-tooltip__trigger el-tooltip__trigger',
    'role': 'combobox',
    '(click)': 'open()'
  }
})

export class NelTimePickerComponent implements OnDestroy {
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
    console.log(1);
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
      const timePickerRef: ComponentRef<NelTimePickerPanelComponent>
        = this.overlayRef.attach(new ComponentPortal(NelTimePickerPanelComponent));
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
