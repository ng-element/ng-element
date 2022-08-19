import { Component, ComponentRef, ElementRef, OnDestroy } from '@angular/core';
import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { NelColorPickerDropdownComponent } from './color-picker-dropdown.component';
import { ComponentPortal } from '@angular/cdk/portal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nel-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})

export class NelColorPickerComponent implements OnDestroy {
  private overlayRef!: OverlayRef;
  isOpen = false;
  outsideSub?: Subscription;
  timeout: any;

  constructor(
    private overlay: Overlay,
    private overlayPositionBuilder: OverlayPositionBuilder,
    private elementRef: ElementRef
  ) { }

  ngOnDestroy(): void {
    if (this.outsideSub) {
      this.outsideSub.unsubscribe();
    }
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  open(): void {
    if (this.isOpen) {
      return;
    }
    const positionBottom: ConnectedPosition = {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    };
    const positionTop: ConnectedPosition = {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    };
    const positionStrategy = this.overlayPositionBuilder
      .flexibleConnectedTo(this.elementRef)
      .withPositions([positionBottom, positionTop]);
    this.overlayRef = this.overlay.create({ positionStrategy });
    if (this.overlayRef) {
      const colorPickerRef: ComponentRef<NelColorPickerDropdownComponent> = this.overlayRef.attach(new ComponentPortal(NelColorPickerDropdownComponent));
      this.isOpen = true;
      this.outsideSub = this.overlayRef.outsidePointerEvents().subscribe(() => {
        this.overlayRef.detach();
        this.outsideSub?.unsubscribe();
        this.timeout = setTimeout(() => {
          this.isOpen = false;
        }, 150);
      });
    }
  }
}
