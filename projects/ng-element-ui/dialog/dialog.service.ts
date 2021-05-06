import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
import { DialogConfirmComponent } from './dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
  ) { }

  confirm<R = any>(
    content: DialogConfig
  ): DialogRef<R> {
    const configs = new OverlayConfig({
      hasBackdrop: true,
      panelClass: ['modal', 'is-active'],
      backdropClass: 'modal-background'
    });

    const overlayRef = this.overlay.create(configs);
    const dialogRef = new DialogRef<R>(overlayRef, content.nelTitle, content.nelContent, content.nelOnCancel, content.nelOnOk);

    const injector = this.createInjector(dialogRef, this.injector);
    overlayRef.attach(new ComponentPortal(DialogConfirmComponent, null, injector));

    return dialogRef;
  }

  createInjector(ref: DialogRef, inj: Injector) {
    const injectorTokens = new WeakMap([[DialogRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}
