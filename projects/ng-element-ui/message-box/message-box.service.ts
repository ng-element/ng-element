import { Injectable, Injector, TemplateRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { MessageBoxRef } from './message-box-ref';
import { NelMessageBoxComponent } from './message-box.component';

export interface OptionsType {
  cancelButtonText?: string;
  confirmButtonText?: string;
  cancel?: Function;
  confirm?: Function;
  type?: string;
  beforeConfirm?: Function;
  center?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class NelMessageBoxService {
  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) { }

  blank<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageBoxRef<R> {
    return this.show('blank', title, content, options);
  }

  alert<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageBoxRef<R> {
    return this.show('alert', title, content, options);
  }

  confirm<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageBoxRef<R> {
    return this.show('confirm', title, content, options);
  }

  show<R = any>(
    type: string,
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageBoxRef<R> {
    const overlayRef = this.overlay.create();
    const messageBoxRef = new MessageBoxRef<R>(type, overlayRef, title, content, options);

    const injector = this.createInjector(messageBoxRef, this.injector);
    overlayRef.attach(new ComponentPortal(NelMessageBoxComponent, null, injector));

    return messageBoxRef;
  }

  createInjector(ref: MessageBoxRef, inj: Injector): Injector {
    return Injector.create({
      parent: inj,
      providers: [{ provide: MessageBoxRef, useValue: ref }]
    });
  }
}