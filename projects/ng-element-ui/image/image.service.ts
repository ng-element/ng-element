import { Portal, PortalInjector, ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ImageConfig } from './image-config';
import { ImageRef } from './image-ref';
import { NelImageViewerComponent } from './image-viewer.component';

@Injectable({
  providedIn: 'root'
})
export class NelImageService {
  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  preview<R = any>(
    config: ImageConfig
  ): ImageRef<R> {
    const overlayRef = this.overlay.create();
    const imageRef = new ImageRef<R>(overlayRef,
      config.nelUrlList, config.nelInitialIndex, config.nelInfinite, config.nelOnClose, config.nelOnSwitch);

    const injector = this.createInjector(imageRef, this.injector);
    overlayRef.attach(new ComponentPortal(NelImageViewerComponent, null, injector));

    return imageRef;
  }

  createInjector(ref: ImageRef, inj: Injector): PortalInjector {
    const injectorTokens = new WeakMap([[ImageRef, ref]]);
    return new PortalInjector(inj, injectorTokens);
  }
}
