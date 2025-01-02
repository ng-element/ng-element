import { ConnectedPosition, Overlay, OverlayPositionBuilder, OverlayRef, } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ComponentRef, ElementRef, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NelCascaderPanelComponent } from './cascader-panel.component';

@Component({
    selector: 'nel-cascader',
    templateUrl: './cascader.component.html',
    host: {
        class: 'el-cascader el-tooltip__trigger el-tooltip__trigger',
        '(click)': 'open()'
    },
    standalone: false
})

export class NelCascaderComponent implements OnDestroy {
  @Input() options: Array<any> = [];
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
    const positionBottom: ConnectedPosition = {
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
      const cascaderRef: ComponentRef<NelCascaderPanelComponent>
        = this.overlayRef.attach(new ComponentPortal(NelCascaderPanelComponent));
      cascaderRef.instance.menuList = [this.options];
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
