import { OverlayRef } from '@angular/cdk/overlay';

export class LoadingRef<R = any> {
  public componentInstance: R | null = null;

  constructor(
    public overlayRef: OverlayRef,
    public options: any
  ) { }

  close(): void {
    (this.componentInstance as any).state = 'done';
  }
}
