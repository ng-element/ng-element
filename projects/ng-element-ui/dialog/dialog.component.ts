import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { BooleanInput } from '@angular/cdk/coercion';
import { modalMotion } from 'ng-element-ui/core/animation';
import { InputBoolean } from 'ng-element-ui/core/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'nel-dialog',
  templateUrl: './dialog.component.html',
  animations: [modalMotion]
})

export class NelDialogComponent {
  static ngAcceptInputType_nelCenter: BooleanInput;

  @Input() set nelVisible(value: boolean) {
    if (value) {
      if (this.dialogTpl) {
        this.openWithTemplate(this.dialogTpl);
      }
    } else {
      this.overlayRef?.dispose();
    }
  };
  @Input() nelTitle?: string | TemplateRef<void>;
  @Input() nelContent?: string | TemplateRef<void>;
  @Input() nelFooter?: string | TemplateRef<void>;
  @Output() nelVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() nelOnClose: EventEmitter<void> = new EventEmitter<void>();
  @Input() nelBeforeClose?: () => boolean | Observable<boolean>;
  @Input() @InputBoolean() nelCenter = false;
  @ViewChild('tpl', { static: false }) dialogTpl?: TemplateRef<any>;
  overlayRef?: OverlayRef;

  constructor(
    private overlay: Overlay,
    private viewContainerRef: ViewContainerRef
  ) { }

  openWithTemplate(tpl: TemplateRef<any>): void {
    this.overlayRef = this.overlay.create();
    this.overlayRef.attach(new TemplatePortal(tpl, this.viewContainerRef));
  }

  handleClose(): void {
    if (this.nelBeforeClose) {
      const before = this.nelBeforeClose();
      if (before instanceof Observable) {
        before.subscribe((data) => {
          if (data) {
            this.close();
          }
        }, (err) => {
          console.log(err);
        });
      } else if (before !== false) {
        this.close();
      }
    } else {
      this.close();
    }
  }

  close(): void {
    this.overlayRef?.dispose();
    this.nelVisibleChange.emit(false);
    this.nelOnClose.emit();
  }

  clickDialog($event: Event): void {
    $event.stopPropagation();
  }
}
