import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export type PositionType = 'topRight' | 'bottomRight' | 'topLeft' | 'bottomLeft';

export class NelNotificationRef<R = any> {
  height = 84;
  public position: PositionType = 'topRight';
  public top = 0;
  public bottom = 0;
  public componentInstance: R | null = null;

  constructor(
    public type: string,
    public id: number,
    public leave: Subject<{ id: number, position: PositionType }>,
    public overlay: OverlayRef,
    public title: string | TemplateRef<void>,
    public content: string | TemplateRef<void>,
    public options: any,
  ) { }

  close(): void {
    (this.componentInstance as any).state = 'done';
  }
}
