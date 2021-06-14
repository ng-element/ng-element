import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef } from '@angular/core';

export class MessageBoxRef<R = any> {
  constructor(
    public type: string,
    public overlay: OverlayRef,
    public title: string | TemplateRef<void>,
    public content: string | TemplateRef<void>,
    public options: any
  ) { }
}