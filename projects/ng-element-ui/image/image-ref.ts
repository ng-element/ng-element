import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

export interface OverlayCloseEvent<R> {
  type: 'close';
  data: R | null;
}

export class ImageRef<R = any> {
  afterClosed$ = new Subject<OverlayCloseEvent<R>>();

  constructor(
    public overlay: OverlayRef,
    public nelUrlList: string[],
    public nelInitialIndex?: number,
    public nelInfinite = true,
    public nelOnClose?: Function,
    public nelOnSwitch?: Function,
  ) { }

  colse(data: R | null): void {
    this._close('close', data);
  }

  private _close(type: 'close', data: R | null): void {
    this.overlay.dispose();
    this.afterClosed$.next({
      type,
      data
    });

    this.afterClosed$.complete();
  }
}
