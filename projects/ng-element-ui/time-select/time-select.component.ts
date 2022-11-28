import { ConnectionPositionPair, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NelTimeSelectPanelComponent } from './time-select-panel.component';

@Component({
  selector: 'nel-time-select',
  templateUrl: './time-select.component.html',
  host: {
    'class': 'el-select',
    '(click)': 'open()'
  }
})

export class NelTimeSelectComponent implements OnDestroy {
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
      const timeSelectRef: ComponentRef<NelTimeSelectPanelComponent>
        = this.overlayRef.attach(new ComponentPortal(NelTimeSelectPanelComponent));
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
