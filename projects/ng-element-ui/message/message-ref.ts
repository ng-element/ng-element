import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';

export class MessageRef<R = any> {
  height = 48;
  public top = 0;
  public componentInstance: R | null = null;

  constructor(
    public type: string,
    public id: number,
    public leave: Subject<number>,
    public overlay: OverlayRef,
    public nelContent: string | TemplateRef<void>,
    public nelOptions?: any,
  ) { }

  close(): void {
    (this.componentInstance as any).state = 'done';
  }
}
