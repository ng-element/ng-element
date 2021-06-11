import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable, TemplateRef, Injector } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { NelNotificationRef, PositionType } from './notification-ref';
import { NelNotificationComponent } from './notification.component';

export interface OptionsType {
  duration?: number;
  position?: string;
  offset?: number;
  showClose?: boolean;
  onClose?: Function;
}

@Injectable({
  providedIn: 'root'
})

export class NelNotificationService {
  notificationId = 0;
  leave = new Subject<{ id: number, position: PositionType }>();
  notificationRefList: {
    topRight: Array<NelNotificationRef>,
    bottomRight: Array<NelNotificationRef>,
    topLeft: Array<NelNotificationRef>,
    bottomLeft: Array<NelNotificationRef>
  } = {
      topRight: [],
      bottomRight: [],
      topLeft: [],
      bottomLeft: []
    };

  constructor(
    private overlay: Overlay,
    private injector: Injector
  ) {
    this._handlerLeave();
  }

  blank<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): NelNotificationRef<R> {
    return this.show('blank', title, content, options);
  }

  success<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): NelNotificationRef<R> {
    return this.show('success', title, content, options);
  }

  warning<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): NelNotificationRef<R> {
    return this.show('warning', title, content, options);
  }

  info<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): NelNotificationRef<R> {
    return this.show('info', title, content, options);
  }

  error<R = any>(
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): NelNotificationRef<R> {
    return this.show('error', title, content, options);
  }

  show<R = any>(
    type: string,
    title: string | TemplateRef<void>,
    content: string | TemplateRef<void>,
    options?: OptionsType
  ): NelNotificationRef<R> {
    this.notificationId++;
    const overlayRef = this.overlay.create();
    const notificationRef = new NelNotificationRef<R>(type, this.notificationId, this.leave, overlayRef, title, content, options);

    const injector = this.createInjector(notificationRef, this.injector);
    const componentRef = overlayRef.attach(new ComponentPortal(NelNotificationComponent, null, injector));

    // 根据notification，获取下一个notification的top
    let top = 16;
    let bottom = 16;
    let key: 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft' = 'topRight';
    if (options) {
      if (options.offset) {
        top += options.offset;
        bottom += options.offset;
      }
      if (options.position) {
        switch (options.position) {
          case 'bottom-right':
            key = 'bottomRight';
            break;
          case 'top-left':
            key = 'topLeft';
            break;
          case 'bottom-left':
            key = 'bottomLeft';
            break;
        }
      }
    }
    if (key === 'topRight' || key === 'topLeft') {
      bottom = 0;
      this.notificationRefList[key].forEach(item => {
        top += item.height + 16;
      });
    } else {
      top = 0;
      this.notificationRefList[key].forEach(item => {
        bottom += item.height + 16;
      });
    }

    this.notificationRefList[key].push(notificationRef);
    notificationRef.position = key;
    notificationRef.top = top;
    notificationRef.bottom = bottom;
    notificationRef.componentInstance = componentRef.instance as unknown as R;
    return notificationRef;
  }

  createInjector(ref: NelNotificationRef, inj: Injector): Injector {
    return Injector.create({
      parent: inj,
      providers: [{ provide: NelNotificationRef, useValue: ref }]
    });
  }

  private _handlerLeave(): void {
    this.leave.subscribe((val) => {
      const componentIndex = this.notificationRefList[val.position].findIndex(item => item.id === val.id);
      if (componentIndex > -1) {
        const height = this.notificationRefList[val.position][componentIndex].height;
        if (componentIndex !== this.notificationRefList[val.position].length - 1) {
          for (let i = componentIndex + 1; i < this.notificationRefList[val.position].length; i++) {
            this.notificationRefList[val.position][i].componentInstance.top -= height + 16;
          }
        }
        this.notificationRefList[val.position].splice(componentIndex, 1);
      }
    });
  }
}
