import { Injectable, Injector, TemplateRef } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { MessageRef } from './message-ref';
import { NelMessageComponent } from './message.component';
import { NelMessageServiceModule } from './message.service.module';

export interface OptionsType {
  showClose?: boolean;
  duration?: number;
  center?: boolean;
  onClose?: Function;
}

@Injectable({
  providedIn: NelMessageServiceModule
})
export class NelMessageService {
  messageId = 0;
  leave = new Subject<number>();
  messageRefList: Array<MessageRef> = [];

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {
    this._handlerLeave();
  }

  info<R = any>(
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageRef<R> {
    return this.show('info', content, options);
  }

  success<R = any>(
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageRef<R> {
    return this.show('success', content, options);
  }

  warning<R = any>(
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageRef<R> {
    return this.show('warning', content, options);
  }

  error<R = any>(
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageRef<R> {
    return this.show('error', content, options);
  }

  show<R = any>(
    type: string,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): MessageRef<R> {
    this.messageId++;
    const overlayRef = this.overlay.create();
    const messageRef = new MessageRef<R>(type, this.messageId, this.leave, overlayRef, content, options);

    const injector = this.createInjector(messageRef, this.injector);
    const componentRef = overlayRef.attach(new ComponentPortal(NelMessageComponent, null, injector));

    // 根据message列表，获取下一个message的top
    let top = 36;
    this.messageRefList.forEach(item => {
      top += item.height + 16;
    });

    this.messageRefList.push(messageRef);
    messageRef.top = top;
    messageRef.componentInstance = componentRef.instance as unknown as R;
    return messageRef;
  }

  createInjector(ref: MessageRef, inj: Injector): Injector {
    return Injector.create({
      parent: inj,
      providers: [{ provide: MessageRef, useValue: ref }]
    });
  }

  private _handlerLeave(): void {
    this.leave.subscribe((id: number) => {
      const componentIndex = this.messageRefList.findIndex(item => item.id === id);
      if (componentIndex > -1) {
        const height = this.messageRefList[componentIndex].height;
        if (componentIndex !== this.messageRefList.length - 1) {
          for (let i = componentIndex + 1; i < this.messageRefList.length; i++) {
            this.messageRefList[i].componentInstance.top -= height + 16;
          }
        }
        this.messageRefList.splice(componentIndex, 1);
      }
    });
  }
}
