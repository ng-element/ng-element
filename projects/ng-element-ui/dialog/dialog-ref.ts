import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';

export interface OverlayCloseEvent<R> {
  type: 'backdropClick' | 'close';
  data: R | null;
}

export class DialogRef<R = any> {
  afterClosed$ = new Subject<OverlayCloseEvent<R>>();

  constructor(
    public overlay: OverlayRef,
    public nelTitle?: string,
    public nelContent?: string,
    public nelOnCancel?: Function,
    public nelOnOk?: Function,
  ) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
  }

  close(data: R | null): void {
    this._close('close', data);
  }

  private _close(type: 'backdropClick' | 'close', data: R | null): void {
    this.overlay.dispose();
    this.afterClosed$.next({
      type,
      data
    });

    this.afterClosed$.complete();
  }
}
