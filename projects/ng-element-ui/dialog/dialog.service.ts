import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { DialogRef } from './dialog-ref';
import { DialogConfig } from './dialog-config';
import { NelDialogConfirmComponent } from './dialog-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class NelDialogService {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
  ) { }

  confirm<R = any>(
    content: DialogConfig
  ): DialogRef<R> {
    const overlayRef = this.overlay.create();
    const dialogRef = new DialogRef<R>(overlayRef, content.nelTitle, content.nelContent, content.nelOnCancel, content.nelOnOk);

    const injector = this.createInjector(dialogRef, this.injector);
    overlayRef.attach(new ComponentPortal(NelDialogConfirmComponent, null, injector));

    return dialogRef;
  }

  createInjector(ref: DialogRef, inj: Injector): PortalInjector {
    const injectorTokens = new WeakMap([[DialogRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}
