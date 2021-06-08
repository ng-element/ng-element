import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, ElementRef, Input, Output, ViewContainerRef, EventEmitter, TemplateRef } from '@angular/core';
import { drawerMotion, drawerDialogMotion } from 'ng-element-ui/core/animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'nel-drawer',
  templateUrl: './drawer.component.html',
  animations: [drawerMotion, drawerDialogMotion]
})

export class NelDrawerComponent {
  width = '30%';
  height = '30%';
  @Input() nelTitle?: string | TemplateRef<void>;
  @Input() nelDirection?: 'rtl' | 'ltr' | 'ttb' | 'btt' | string = 'rtl';
  @Input() nelWithHeader = true;
  @Input() nelShowClose = true;
  @Input() nelBeforeClose?: () => boolean | Observable<boolean>;
  @Input() set nelSize(val: number | string) {
    if (typeof val === 'number') {
      this.width = val + 'px';
      this.height = val + 'px';
    } else {
      this.width = val;
      this.height = val;
    }
  }
  @Input() set nelVisible(val: boolean) {
    if (val) {
      this.show();
    } else {
      if (this.isOpen) {
        this.close();
      }
    }
  }
  @Output() nelVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen = false;
  trigger!: CdkOverlayOrigin;

  constructor(
    protected hostView: ViewContainerRef,
    private elementRef: ElementRef,
  ) { }

  show(): void {
    this.trigger = { elementRef: this.elementRef };
    this.isOpen = true;
  }

  handleClose(): void {
    if (this.isOpen && this.nelBeforeClose) {
      const before = this.nelBeforeClose();
      if (before instanceof Observable) {
        before.subscribe((data) => {
          if (data) {
            this.close();
          }
        }, (err) => {
          console.error(err);
        });
      } else if (before !== false) {
        this.close();
      }
    } else {
      this.close();
    }
  }

  close(): void {
    this.isOpen = false;
    this.nelVisibleChange.emit(false);
  }

  clickDrawer($event: Event): void {
    $event.stopPropagation();
  }
}
