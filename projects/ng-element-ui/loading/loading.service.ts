import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { LoadingRef } from './loading-ref';
import { NelLoadingFullscreenComponent } from './loading-fullscreen.component';

export interface OptionsType {
  text?: string;
  spinner?: string;
  background?: string;
}

@Injectable({
  providedIn: 'root'
})

export class NelLoadingService {
  loadingRef!: LoadingRef;

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  show<R = any>(
    options?: OptionsType
  ): LoadingRef<R> {
    const overlayRef = this.overlay.create();
    const loadingRef = new LoadingRef<R>(overlayRef, options);

    const injector = this.createInjector(loadingRef, this.injector);
    const componentRef = overlayRef.attach(new ComponentPortal(NelLoadingFullscreenComponent, null, injector));
    loadingRef.componentInstance = componentRef.instance as unknown as R;

    this.loadingRef = loadingRef;
    return loadingRef;
  }

  createInjector(ref: LoadingRef, inj: Injector): Injector {
    return Injector.create({
      parent: inj,
      providers: [{ provide: LoadingRef, useValue: ref }]
    });
  }

  hide(): void {
    this.loadingRef.close();
  }
}
